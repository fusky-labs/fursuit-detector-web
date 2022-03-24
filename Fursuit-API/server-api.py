from flask import Flask, request, jsonify
import cv2
import numpy as np
import os
import random
import string
cors_allowed = True
app = Flask(__name__)

if cors_allowed:
    from flask_cors import CORS
    CORS(app)

@app.route('/detect', methods=['POST'])
def detect():
    if request.method == 'POST':
        session = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        image = request.files.get('image')
        image = np.asarray(bytearray(image.read()), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        print(image.shape)
        cv2.imwrite(session + '.jpg', image)
        return jsonify({
            "status":"success",
            "session": session
            })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)