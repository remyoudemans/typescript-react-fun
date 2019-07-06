FROM node:8.16.0-alpine as build
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

####
FROM node:8.16.0-alpine
RUN mkdir /app
COPY --from=build /app/build /app
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "app"]
