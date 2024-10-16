import { AuthUser } from "@/types/Entities.ts"

export function saveUser(user: AuthUser) {
  localStorage.setItem("token", JSON.stringify(user.token))
}
