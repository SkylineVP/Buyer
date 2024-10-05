import { Test, TestingModule } from "@nestjs/testing"
import { AppController } from "./app.controller"
import { AppService, db_count } from "./app.service"

describe("AppController", () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe("root", () => {
    it("should return correct count", () => {
      expect(appController.getCunt()).toBe(db_count)
    })
  })
})
