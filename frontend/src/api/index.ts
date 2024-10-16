import axios from "./axios.ts"
import { AuthUser } from "src/types/Entities.ts"
import { LoginData, RegisterData } from "src/api/types.ts"
import { AxiosResponse } from "axios"

export async function getUser() {
  return await axios.get("users")
}

export async function register(data: RegisterData): Promise<AxiosResponse<AuthUser>> {
  return await axios.post<AuthUser>("register", data)
}

export async function login(data: LoginData): Promise<AxiosResponse<AuthUser>> {
  return await axios.post<AuthUser>("login", data)
}
