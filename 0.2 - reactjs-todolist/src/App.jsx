import { useState, useEffect } from "react";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "LeetCode problem of the day solve korte hobe...",
    "React er ekta project sesh korte hobe...",
    "Boostrap module sesh korte hobe...",
    "Practice day 2 complete korte hobe...",
  ]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newTodoList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodoList }));
  }

  function addTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function deleteTodo(idx) {
    const newTodoList = todos.filter((todo, index) => {
      return index !== idx;
    });
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function editTodo(idx) {
    setTodoValue(todos[idx]);
    deleteTodo(idx);
  }

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <main>
        <TodoInput
          addTodos={addTodos}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </main>
    </>
  );
}

export default App;
