FROM python:3-alpine

LABEL Kerby Keith Aquino

COPY ./requirements.txt /requirements.txt

WORKDIR /

RUN apk add --update \
    gcc\
    nodejs \
    npm \
    && pip install --upgrade pip \
    && pip install -r requirements.txt \
    && rm -rf /var/cache/apk/*

COPY ./package.json /package.json

RUN npm install

