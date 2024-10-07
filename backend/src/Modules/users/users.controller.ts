import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from "@nestjs/common"
import { UsersService } from "./users.service"
import { UserDto } from "src/Modules/users/dto/user.dto"
import { CreateUserDto } from "src/Modules/users/dto/create-user.dto"
import { UpdateUserDto } from "src/Modules/users/dto/update-user.dto"
import { AuthGuard } from "src/Modules/auth/Auth.guard"

@UseGuards(AuthGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.usersService.findAll()
  }

  @Get(":id")
  async find(@Param("id") id: number): Promise<UserDto> {
    return this.usersService.find(id)
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    return this.usersService.update(id, updateUserDto)
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.usersService.remove(id)
  }
}
