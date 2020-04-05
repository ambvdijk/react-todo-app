import React from "react"
import { Todo } from "./Todo"
import { TodoItem } from "./TodoItem"

export interface TodoListProps {
  todos: Todo[]
}

export const TodoList = ({ todos }: TodoListProps) => {

  const todoItems = todos.map(todo => (<TodoItem key={todo.id} todo={todo} />))
  return (
    <ul>
      {todoItems}
    </ul>
  )
}