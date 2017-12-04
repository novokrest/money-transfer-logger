#!/bin/bash

IMAGE=dnovokrest/money-transfer-logger-frontend:latest

BACKGROUND_FLAG=-d

if [ $# -gt 0 ] && [ $1 == "debug" ]; then
  BACKGROUND_FLAG=
fi

docker pull $IMAGE
docker run -it --rm --name money-transfer-logger-frontend -p 81:8080 $BACKGROUND_FLAG $IMAGE
