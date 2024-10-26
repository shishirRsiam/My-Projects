import React, { useState } from "react";

export default function TodoInput(props) {
  const { addTodos, todoValue, setTodoValue } = props;

  return (
    <>
      <header>
        <input
          value={todoValue}
          onChange={(el) => {
            setTodoValue(el.target.value);
          }}
          placeholder="Enter Todo..."
        />
        <button
          onClick={() => {
            addTodos(todoValue);
            setTodoValue("");
          }}>
          Add
        </button>
      </header>
    </>
  );
}
