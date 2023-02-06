import React from "react";
import { Features } from "../store";
import fiets from "./media/drag-indicator.svg";

type ToDoListItemProps = {
  todo: Features.Todo.Todo;
};

export function ToDoListItem({ todo }: ToDoListItemProps): JSX.Element {
  return (
    <li>
      <img alt="Drag Indicator" src={fiets}></img> {todo.title}
    </li>
  );
}
