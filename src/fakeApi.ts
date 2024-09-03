import { AuthData, Message } from "./types";

export const fakeApi = async (data: AuthData): Promise<Message> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (data.password === "wrong password") {
    throw new Error("неверный пароль");
  }
  return {
    message: `вы вошли под почтой ${data.email}`,
    error: false,
  };
};
