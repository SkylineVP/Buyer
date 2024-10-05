import { Controller, Delete, Get, Post } from "@nestjs/common"
import { AppService } from "./app.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("addCount")
  addCount(): number {
    return this.appService.addCount()
  }
  @Delete("count")
  clearCount(): number {
    return this.appService.setCount(0)
  }
  @Get("count")
  getCunt(): number {
    return this.appService.getCount()
  }
}
