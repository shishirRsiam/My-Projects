import React from "react";

export default function TodoCard(props) {
  const { children, deleteTodo, editTodo, idx } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            editTodo(idx);
          }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            deleteTodo(idx);
          }}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
