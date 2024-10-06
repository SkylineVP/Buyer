import { config } from "dotenv"
import * as process from "node:process"

config({ debug: true })

export const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  APP_PORT: process.env.APP_PORT,
  BC_HASH: process.env.BC_HASH,
  isDev: process.env.NODE_ENV === "development",
  db: {
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
}
