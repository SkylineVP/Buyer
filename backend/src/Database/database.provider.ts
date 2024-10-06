import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigService } from "@nestjs/config"
import { DatabaseConfig } from "src/config/database.config"

export const DatabaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: undefined,
    inject: [ConfigService],
    useFactory: (configService: ConfigService): any => {
      const dbConfig = configService.get<DatabaseConfig>("database")
      return {
        type: "postgres",
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.name,
        entities: [__dirname + "/../Modules/**/*.entity{.ts,.js}"],
        migrations: [__dirname + "/../migrations/**/*{.ts,.js}"],
        synchronize: false,
      }
    },
  }),
]
