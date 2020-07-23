# Fullstack TODO

Fullstack project using docker-compose, postgres, react and graphql

Backend use [PostGraphile](https://www.graphile.org/postgraphile/)
Front use React, Formik and [holiday.css](https://holidaycss.js.org/) :tada:

## How to run

    docker-compose up

## How to dev

    docker-compose up --build db back adminer
    npm run wgenerate
    npm --prefix front start

## Hasura

### metadata

I had trouble getting metadata load at startup. At first I tried to export metadata as json file and put it in docker-compose volume.

    I got error : msg="failed to apply metadata: cannot apply metadata on the database: [parse-failed] key \"tables\" not found (\$[1])"

I add to export metadata `npx metadata apply` to get `migrations/metadata.yaml`. Even if I use `metadata_directory: metadata` in config.yaml, the file is written in migration.
Then I found out in https://hasura.io/docs/1.0/graphql/manual/migrations/reference/metadata-format.html that I should create tables.yaml file and only keep tables array.
