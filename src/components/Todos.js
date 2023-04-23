import React from "react";
import Todo from "./Todo";
import { useTodo } from "react-use-todo";

const Todos = () => {
  const {
    filterdTodos: { todos }
  } = useTodo();
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
