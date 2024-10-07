export interface User {
  name: string
  email: string
  id: number
}

export interface AuthUser extends User {
  token: string
}
