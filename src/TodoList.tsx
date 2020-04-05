import React from "react"
import { Todo } from "./Todo"
import { TodoItem } from "./TodoItem"

export interface TodoListProps {
  todos: Todo[],
  onTodoClick: () => void
}

export const TodoList = ({ todos, onTodoClick }: TodoListProps) => {

  const todoItems = todos.map(todo => (<TodoItem key={todo.id} todo={todo} onClick={onTodoClick} />))
  return (
    <ul>
      {todoItems}
    </ul>
  )
}