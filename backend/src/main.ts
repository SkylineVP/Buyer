import { NestFactory } from "@nestjs/core"
import { AppModule } from "src/app.module"
import { ENV } from "src/config/env"
declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(ENV.APP_PORT)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
