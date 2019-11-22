FROM node:latest

ENV APPPORT=${APPPORT}
ENV DBHOST=${DBHOST}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE ${APPPORT}
CMD [ “npm”, “start” ]