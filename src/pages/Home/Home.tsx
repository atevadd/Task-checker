import { useState, useEffect } from "react";
import TodoInput from "../../components/todo input/TodoInput";
import TodoList from "../../components/todo list/TodoList";
import "./home.css";
import {
  getFromLocalStorage,
  storeToLocalStorage,
} from "../../utilities/storage";

interface Todo {
  task: string;
  status: boolean;
}
const Home = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const allTodo = getFromLocalStorage("todo");

    if (!allTodo) {
      setAllTodos([]);
      storeToLocalStorage("todo", []);
    } else {
      setAllTodos(allTodo);
    }
  }, []);

  const handleInput = (): void => {
    const allTodos = getFromLocalStorage("todo");

    if (!allTodos) {
      setAllTodos([]);
      storeToLocalStorage("todo", []);
    } else {
      setAllTodos(allTodos);
    }
  };

  const deleteTodo = (task: string) => {
    const newTodos = allTodos.filter((todo: Todo) => todo.task !== task);
    setAllTodos(newTodos);
    storeToLocalStorage("todo", newTodos);
  };

  return (
    <main className="home">
      <header>
        <h1>Todo</h1>
      </header>
      <TodoInput
        placeholder="Create a new todo"
        type="text"
        onTodoInput={handleInput}
      />
      <TodoList tasks={allTodos} deleteTodo={deleteTodo} />
    </main>
  );
};

export default Home;
