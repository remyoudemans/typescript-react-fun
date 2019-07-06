FROM node:8.16.0-alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
