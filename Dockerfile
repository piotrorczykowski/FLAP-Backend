FROM node:17

WORKDIR /usr/src/app

COPY ./src/package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY ./src .

EXPOSE 5000

CMD ["nodemon", "--legacy-watch", "index.js"]
