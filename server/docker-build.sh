#!/bin/bash

IMAGE=dnovokrest/money-transfer-logger-backend:latest

./gradlew build
docker build --build-arg JAR_FILE=build/libs/money-transfer-logger-1.0.0.jar -t $IMAGE .

if [ $# -gt 0 ] && [ $1 == "push" ]; then
  echo Pushing docker image: $IMAGE
  docker push $IMAGE
fi
