import { fakeDb } from "../fakeDb";

const listData = [
  { id: 0, email: "email", password: "password" },
  ...fakeDb.users,
];

export const UserList = () => {
  return (
    <ul className="user-list">
      {listData.map(({ email, id, password }) => (
        <li className="user-list__item" key={id}>
          <div>{email}</div>
          <div>{password}</div>
        </li>
      ))}
    </ul>
  );
};
