import { fakeDb } from "./fakeDb";
import { getUserDict } from "./helpers";
import { AuthData } from "./types";

export const fakeApi = async (data: AuthData): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const userEmail = getUserDict(fakeDb.users);
  if (!userEmail[data.email]) {
    throw new Error("такой пользователь не зарегистрирован");
  }

  if (userEmail[data.email] !== data.password) {
    throw new Error("пароль неверен");
  }

  return `вы вошли c почтой ${data.email}`;
};
