import { User } from "src/Modules/users/entities/user.entity"

export class UserDto {
  name: string
  email: string
  id: number

  constructor(user: User) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
  }
}
