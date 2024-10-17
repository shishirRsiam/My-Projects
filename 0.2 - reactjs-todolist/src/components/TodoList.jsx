import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, idx) => {
        return (
          <TodoCard {...props} key={idx} idx={idx}>
            <p>
              {idx + 1}. {}
              {todo}
            </p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
