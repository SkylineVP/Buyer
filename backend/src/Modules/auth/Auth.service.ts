import { Injectable, UnauthorizedException } from "@nestjs/common"
import { CreateUserDto } from "../users/dto/create-user.dto"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcrypt"
import { UsersService } from "src/Modules/users/users.service"
import { UserDto } from "src/Modules/users/dto/user.dto"

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto)
    const payload = { email: user.email, id: user.id, name: user.name }
    return {
      access_token: this.jwtService.sign(payload),
      ...user,
    }
  }

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email)
    if (!user) {
      throw new UnauthorizedException("Неверные учетные данные.")
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException("Неверные учетные данные.")
    }

    const payload = { email: user.email, id: user.id, name: user.name }
    return {
      access_token: this.jwtService.sign(payload),
      ...new UserDto(user),
    }
  }
}
