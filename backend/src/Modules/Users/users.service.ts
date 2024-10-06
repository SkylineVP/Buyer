import { ConflictException, Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from "./entities/user.entity"

import { UserDto } from "src/Modules/Users/dto/user.dto"
import { CreateUserDto } from "src/Modules/Users/dto/create-user.dto"
import { UpdateUserDto } from "src/Modules/Users/dto/update-user.dto"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = this.usersRepository.create(createUserDto)
    try {
      return new UserDto(await this.usersRepository.save(user))
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("User with this email already exists.")
      }
      throw error // Если это не ошибка уникальности, просто выбрасываем
    }
  }

  async findAll(): Promise<UserDto[]> {
    return (await this.usersRepository.find()).map((user) => new UserDto(user))
  }

  async find(id: number): Promise<UserDto> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return new UserDto(user)
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const result = await this.usersRepository.update(id, updateUserDto)

    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`)
    }

    return this.find(result.affected)
  }

  async remove(id: number): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    await this.usersRepository.remove(user)
  }
}
