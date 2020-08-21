FROM node:14.7-alpine

ENV TZ=Europe/Moscow
RUN apk add --no-cache tzdata bash curl
RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /home/node/api

COPY ./ ./

RUN npm i

ENTRYPOINT ./entrypoint.sh
