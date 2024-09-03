export interface AuthData {
  email: string;
  password: string;
}
export interface Message {
  message: string;
  error: boolean;
}

export interface User {
  id: number;
  email: string;
  password: string;
}

export type UserEmailDict = Record<string, string>;
