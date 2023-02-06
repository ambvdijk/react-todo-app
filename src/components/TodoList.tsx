import React from "react";
import { Features } from "../store";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList({ todos }: { todos: Features.Todo.Todo[] }): JSX.Element {
  const toDoListItems = todos.map((todo) => (
    <ToDoListItem key={todo.id} todo={todo}></ToDoListItem>
  ));

  return (
    <section id="todo-list">
      <h1>ToDo List</h1>
      <ul className="todo-list">{toDoListItems}</ul>
    </section>
  );
}
