import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { JwtModule } from "@nestjs/jwt"
import { ENV } from "src/config/env"
import { UsersModule } from "src/Modules/users/users.module"
import { AppConfigModule } from "src/config/config.module"

@Module({
  imports: [
    AppConfigModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: ENV.JWT_SECRET,
      signOptions: { expiresIn: "60m" },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
