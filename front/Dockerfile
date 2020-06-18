FROM node:14

ADD package.json .
ADD package-lock.json .

RUN npm ci

ADD . .

RUN npm run build

FROM node:14
COPY --from=0 /build /build
RUN npm i -g serve

ENTRYPOINT [ "serve", "-l", "tcp://0.0.0.0:3000", "-s", "build/"]
