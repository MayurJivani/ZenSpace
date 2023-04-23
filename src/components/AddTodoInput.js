import React, { useState, useCallback } from "react";
import { useTodo } from "react-use-todo";

const AddTodoInput = ({ todo, isEdit = false, setIsEdit }) => {
  const [todoText, setTodoText] = useState(todo ? todo.text : "");
  const { addTodo, updateTodo } = useTodo();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!todoText.trim()) {
        alert("Please enter todo");
        return;
      }
      if (todo && isEdit) {
        updateTodo(todo.id, todoText);
        setIsEdit && setIsEdit(false);
      } else {
        const todo = {
          id: Date.now(),
          text: todoText,
          completed: false
        };
        addTodo(todo);
      }
      setTodoText("");
    },
    [todoText, addTodo, todo, isEdit, setIsEdit, updateTodo]
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="TodoTitle">ToDo List</h1>
      <input
        type="text"
        className="todoText"
        placeholder="Enter Text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="todoAdd" type="submit">{isEdit ? "Update" : "Add"}</button>
    </form>
  );
};

export default AddTodoInput;
