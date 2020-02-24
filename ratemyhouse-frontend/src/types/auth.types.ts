export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  username: string;
}

export interface Auth {
  isLoggedIn: boolean,
  userName: string,
  message?: string,
}