import { Form } from "./components/Form";
import "./App.css";
import { UserList } from "./components/UserList";

function App() {
  return (
    <main>
      <h1>YLAB FORM</h1>
      <section>
        <h2>Как бы база данных юзеров</h2>
        <UserList />
      </section>
      <Form />
    </main>
  );
}

export default App;
