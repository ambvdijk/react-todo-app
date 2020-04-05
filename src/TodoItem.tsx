import React from "react"
import { Todo } from "./Todo"

export interface TodoItemProps {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li>
      <span>{todo.title}</span>
      {todo.text}
    </li>
  )
}