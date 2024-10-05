import { TypeOrmModuleOptions, TypeOrmModule } from "@nestjs/typeorm"
import { ConfigService } from "@nestjs/config"
import { DatabaseConfig } from "src/config/database.config"
import { ENV } from "src/config/env"

export const DatabaseProviders = [
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
      const dbConfig = configService.get<DatabaseConfig>("database")
      return {
        type: "postgres",
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.name,
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: ENV.isDev,
      }
    },
  }),
]
