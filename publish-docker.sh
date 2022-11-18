#!/usr/bin/env bash

USERNAME=maksimpegov
IMAGE=todo-server

docker buildx build --platform linux/amd64 -t $USERNAME/$IMAGE:latest . && \
docker push $USERNAME/$IMAGE:latest