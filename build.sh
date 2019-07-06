#!/bin/bash

ng build --prod --aot=true

APPNAME="lennonalvescombr"
SERVER="registry.lennonalves.com.br"
TIMESTAMP=$(date "+%Y.%m.%d-%H.%M")

echo "Construindo a imagem ${SERVER}/${APPNAME}:${TIMESTAMP}"
docker build -t ${SERVER}/${APPNAME}:${TIMESTAMP} .

echo "Marcando a tag latest também"
docker tag ${SERVER}/${APPNAME}:${TIMESTAMP} ${SERVER}/${APPNAME}:latest

echo "Enviando a imagem para nuvem docker"
docker push ${SERVER}/${APPNAME}:${TIMESTAMP}
docker push ${SERVER}/${APPNAME}:latest

export TIMESTAMP