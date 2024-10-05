import { Module, Global } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DatabaseProviders } from "src/Database/database.provider"

@Global()
@Module({
  imports: [...DatabaseProviders],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
