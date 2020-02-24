export interface LoginCredentials {
  email: string;
  password: string
}

export interface Auth {
  isLoggedIn: boolean,
  userName: string,
  message?: string,
}