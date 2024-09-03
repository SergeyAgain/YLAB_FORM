import { AuthData } from "./types";

export const getAuthData = (formData: FormData): AuthData =>
  [...formData.entries()].reduce((acc, [key, value]) => {
    acc[key as keyof AuthData] = value as string;
    return acc;
  }, {} as AuthData);

export const getPasswordError = (password: string): string =>
  password.length < 6 ? "минимальная длина пароля 6 символов" : "";
