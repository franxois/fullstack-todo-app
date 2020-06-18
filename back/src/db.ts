import { Pool } from "pg";

const db_host = process.env.DB_HOST || "localhost";

const pool = new Pool({
  host: db_host,
  user: "postgres",
  password: "postgres",
  database: "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

export default pool;
