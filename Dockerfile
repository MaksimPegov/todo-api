FROM node:13-alpine

RUN mkdir -p /home/server

COPY . /home/server


CMD ["node", "/home/server/index.js"]