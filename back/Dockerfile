FROM node:14

ADD package.json .
ADD package-lock.json .

RUN npm ci

ADD . .

# RUN npm test

ENTRYPOINT [ "npm" , "run", "start"]