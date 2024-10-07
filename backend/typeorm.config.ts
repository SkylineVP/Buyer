import { DataSource } from "typeorm"

import { ENV } from "src/config/env"

export const AppDataSource = new DataSource({
  type: "postgres",
  ...ENV.db,
  username: ENV.db.user,
  password: ENV.db.password,
  database: ENV.db.name,
  entities: ["src/Modules/**/*.entity{.ts,.js}"],
  migrations: ["src/Database/migrations/**/*{.ts,.js}"],
  synchronize: false, // Отключите синхронизацию, используйте миграции
  logging: false,
})
