import { ENV } from "./env"

export interface DatabaseConfig {
  host: string
  port: number
  user: string
  password: string
  name: string
}

if (!process.env.DATABASE_USER || !process.env.DATABASE_PASSWORD || !process.env.DATABASE_NAME) {
  throw new Error("Missing database ENV parameters")
}

export default (): { database: DatabaseConfig } => ({
  database: ENV.db,
})
