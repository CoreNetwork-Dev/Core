# syntax=docker/dockerfile:1
FROM node:18-bullseye
ENV NODE_ENV=production
WORKDIR /
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
EXPOSE 8080
COPY . .
CMD [ "node", "server/index.js" ]
