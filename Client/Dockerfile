FROM node:18.0.0-alpine

WORKDIR /app

COPY . /app

ENV REACT_APP_REST=/api

RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]