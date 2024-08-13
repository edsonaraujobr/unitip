FROM node:18-alpine

WORKDIR /api 

COPY package*.json ./

RUN npm i

COPY . .

RUN apk add --no-cache curl \
    && curl -L https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    | tar -C /usr/local/bin -xz

EXPOSE 4000

CMD ["npm", "run", "dev"]
