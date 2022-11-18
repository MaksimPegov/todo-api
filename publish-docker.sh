#!/usr/bin/env bash

USERNAME=maksimpegov
IMAGE=todo-server

docker build -t $USERNAME/$IMAGE:latest . && \
docker push $USERNAME/$IMAGE:latest