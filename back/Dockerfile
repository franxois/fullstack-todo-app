FROM node:14-alpine3.12

ADD package.json .
ADD package-lock.json .

RUN npm ci

ADD . .

# RUN npm test

ENTRYPOINT [ "npm" , "start"]