from flask import Flask, request, jsonify
import cv2
import numpy as np
import os
import random
import string  
from tool import darknet2pytorch
import torch
from tool.utils import load_class_names, plot_boxes_cv2
from tool.torch_utils import do_detect

cors_allowed = True
app = Flask(__name__)

if cors_allowed:
    from flask_cors import CORS
    CORS(app)

# load weights and model from pytorch format and the config from darknet
model_pt = darknet2pytorch.Darknet('yolov4-obj.cfg', inference=True)
model_pt.load_state_dict(torch.load('yolov4-pytorch.pth'))
model_pt.eval()

@app.route('/detect', methods=['POST'])
def detect():
    if request.method == 'POST':
        session = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        image = request.files.get('image')
        image = np.asarray(bytearray(image.read()), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        boxes = do_detect(model_pt, cv2.resize(image, (416, 416)), 0.5, 0.4, use_cuda=False)
        print(boxes[0])
        plot_boxes_cv2(image, boxes[0], f"client/.next/static/{session}.png", class_names=['furry'])
        print(image.shape)
        return jsonify({
            "status":"success",
            "session": session,
            "furries": len(boxes[0])
        })

@app.route("/delete/<session>")
def delete(session):
    os.remove(f"client/.next/static/{session}.png")
    return jsonify({
        "status":"success"
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)