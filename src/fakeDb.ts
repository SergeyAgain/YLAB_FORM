import { User } from "./types";

export const fakeDb: { users: User[] } = {
  users: [
    {
      id: 1,
      email: "3wCp8@example.com",
      password: "123456",
    },
    {
      id: 2,
      email: "user2@example.com",
      password: "33333333",
    },
    {
      id: 3,
      email: "superuser@example.com",
      password: "101010101",
    },
    {
      id: 4,
      email: "somesome@example.com",
      password: "qqqqqqq",
    },
  ],
};
