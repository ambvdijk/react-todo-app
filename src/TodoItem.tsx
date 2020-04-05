import React from "react"
import { Todo } from "./Todo"

export interface TodoItemProps {
  todo: Todo,
  onClick: (todo: Todo, event: React.MouseEvent) => void
}

export const TodoItem = ({ todo, onClick }: TodoItemProps) => {
  return (
    <li onClick={(e) => onClick(todo, e)}>
      <span>{todo.title}</span>
      {todo.text}
    </li>
  )
}