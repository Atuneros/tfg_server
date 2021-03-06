FROM node:16-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . /app

EXPOSE 30200

CMD [ 'cd', 'app' ]

CMD [ "node", "start" ]