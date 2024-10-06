import { ENV } from "./env"

export interface DatabaseConfig {
  host: string
  port: number
  user: string
  password: string
  name: string
}

console.log(ENV)

export default (): { database: DatabaseConfig } => ({
  database: ENV.db,
})
