#!/bin/bash

# Install root
yarn install

# Install python crap
pip install -r requirements.txt
sudo apt install python3-opencv
pip3 install torch==1.11.0+cpu -f https://download.pytorch.org/whl/cpu/torch_stable.html
# wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=1PpOzBo8yZzQZ8ncMdreCrejd_P23fYiG' -O- || sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=1PpOzBo8yZzQZ8ncMdreCrejd_P23fYiG" -O yolov4-pytorch.pth
# rm -rf /tmp/cookies.txt

# Install Next.js
yarn --cwd ./client install

exit
