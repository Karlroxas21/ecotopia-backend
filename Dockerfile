FROM node:15.4

WORKDIR /backend

COPY package*.json .
RUN npm install
COPY . .
CMD node server.js