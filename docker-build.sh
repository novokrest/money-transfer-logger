#!/bin/bash

IMAGE=dnovokrest/money-transfer-logger-frontend:latest

npm run build
docker build -t $IMAGE .

if [ $# -gt 0 ] && [ $1 == "push" ]; then
  docker push $IMAGE
fi
