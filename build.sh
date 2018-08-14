#!/bin/bash

APPNAME="lennonalvescombr"
USER="lennonalvesdias"
TIMESTAMP=$(date "+%Y.%m.%d-%H.%M")

echo "Construindo a imagem ${USER}/${APPNAME}:${TIMESTAMP}"
docker build -t ${USER}/${APPNAME}:${TIMESTAMP} .

echo "Marcando a tag latest também"
docker tag ${USER}/${APPNAME}:${TIMESTAMP} ${USER}/${APPNAME}:latest

echo "Enviando a imagem para nuvem docker"
docker push ${USER}/${APPNAME}:${TIMESTAMP}
docker push ${USER}/${APPNAME}:latest

export TIMESTAMP