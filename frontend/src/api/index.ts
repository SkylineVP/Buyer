import axios from "src/api/axios.ts"
import { AuthUser } from "src/types/Entities.ts"
import { LoginData, RegisterData } from "src/api/types.ts"

export async function getUser() {
  return await axios.get("users")
}

export async function register(data: RegisterData): Promise<AuthUser> {
  return await axios.post<AuthUser, AuthUser>("register", data)
}

export async function login(data: LoginData): Promise<AuthUser> {
  return await axios.post<AuthUser, AuthUser>("register", data)
}
