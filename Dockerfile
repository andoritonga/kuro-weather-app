FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install --location=global
COPY . .
EXPOSE 8080
CMD npm run start-dev
