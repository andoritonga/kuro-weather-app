FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install -g
COPY . . 
CMD npm run start-dev
EXPOSE 8080
