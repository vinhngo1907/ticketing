FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm run install --only=prod

COPY . .

CMD [ "npm", "start" ]