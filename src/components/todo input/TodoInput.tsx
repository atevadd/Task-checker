import {
  getFromLocalStorage,
  storeToLocalStorage,
} from "../../utilities/storage";
import "./todoinput.css";
import { useState } from "react";

interface Props {
  placeholder: string;
  type: string;
  onTodoInput: () => void;
}

const TodoInput = ({ placeholder, type, onTodoInput }: Props) => {
  const [task, setTask] = useState("");

  // handle todo form
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const todo = {
      task,
      status: true,
    };

    // get existing data in localstorage
    let allTodos = getFromLocalStorage("todo");

    if (!allTodos) {
      allTodos = [];
      allTodos.push(todo);
      storeToLocalStorage("todo", allTodos);
      setTask("");
    } else {
      // append to localstorage data
      allTodos.push(todo);

      storeToLocalStorage("todo", allTodos);
      setTask("");
    }

    onTodoInput();
  };

  return (
    <div className="todo-input">
      <form onSubmit={handleSubmit}>
        <input
          type={type}
          placeholder={placeholder}
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default TodoInput;
