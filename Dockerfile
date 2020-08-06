FROM node:14.7-alpine

ENV TZ=Europe/Moscow
RUN apk add --no-cache tzdata bash curl

WORKDIR /home/node/api

COPY ./ ./

RUN npm i

ENTRYPOINT ./entrypoint.sh
