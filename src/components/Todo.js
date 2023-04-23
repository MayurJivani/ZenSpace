import React, { useState } from "react";
import { useTodo } from "react-use-todo";
import AddTodoInput from "./AddTodoInput";

const Todo = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { removeTodo, toggleTodo } = useTodo();

  return (
    
    <li className="li-todo">
      <input
        className="li-checkbox"
        id={todo.id}
        type="checkbox"
        value={todo.completed}
        checked={todo.completed}
        onChange={(e) => toggleTodo(todo.id)}
      />
      <label
        className="li-label"
        htmlFor={todo.id}
        style={{ textDecoration: todo.completed && "line-through" }}
      >
        {todo.text}
      </label>
      <button className="li-btn-remove" onClick={(e) => removeTodo(todo.id)}>Remove</button>
      
      {isEdit && (
        <AddTodoInput isEdit={isEdit} todo={todo} setIsEdit={setIsEdit} />
      )}
    </li>
    
  );
};

export default Todo;
