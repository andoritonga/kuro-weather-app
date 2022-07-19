FROM node:17-alpine as dependencies
WORKDIR /app
COPY package.json .
RUN npm i
COPY . . 
EXPOSE 8080
CMD npm run start-dev