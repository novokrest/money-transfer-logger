FROM node:6.9.4-alpine
MAINTAINER novokrest013@gmail.com
EXPOSE 8080
WORKDIR /app
ADD ./config /app/config
ADD ./dist /app/dist
ADD ./server-prod.js /app
ADD ./package-docker.json /app/package.json
RUN npm install
CMD npm run prod
