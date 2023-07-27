// import { useState, useEffect } from "react";
import "./todolist.css";
// import { storeToLocalStorage } from "../../utilities/storage";

interface Todo {
  task: string;
  status: boolean;
}
const TodoList = ({ tasks, deleteTodo }) => {
  return (
    <div className="todo-list">
      {tasks.length > 0 && (
        <>
          {tasks.reverse().map((todo: Todo, index: number) => (
            <div className="todo-item" key={index}>
              <input type="checkbox" id={`task${index}`} />
              <span>{todo.task}</span>
              <i
                className="ri-close-line"
                onClick={() => deleteTodo(todo.task)}
              ></i>
            </div>
          ))}
        </>
      )}

      {tasks.length <= 0 && (
        <div className="todo-list__empty-state">
          <i className="ri-file-list-2-line"></i>
          <h2>There is no todo</h2>
        </div>
      )}
    </div>
  );
};

export default TodoList;
