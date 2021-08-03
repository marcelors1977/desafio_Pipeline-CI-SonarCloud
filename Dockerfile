FROM node:14-alpine

WORKDIR /usr/src/app

COPY *.json ./
# instalar dependencias node
RUN npm install

COPY . .

CMD ["node", "index.js"]