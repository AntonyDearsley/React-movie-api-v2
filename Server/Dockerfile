FROM node:18.0.0-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "serve" ]