import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/Database/Database.module"
import { AuthModule } from "src/Modules/Auth/Auth.module"
import { AppConfigModule } from "src/config/config.module"
import { AppController } from "src/app.controller"
import { AppService } from "src/app.service"

@Module({
  imports: [AuthModule, DatabaseModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
