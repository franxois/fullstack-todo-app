const http = require("http");
const { postgraphile } = require("postgraphile");

http
  .createServer(
    postgraphile(
      process.env.DATABASE_URL || "postgres://postgres:postgres@localhost",
      "public",
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        enableCors: true,
        retryOnInitFail: true,
      }
    )
  )
  .listen(process.env.PORT || 4000);
