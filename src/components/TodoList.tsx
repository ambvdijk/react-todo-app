import React from "react"
import { Todo } from "../domain/Todo"
import { TodoItem } from "./TodoItem"
import { connect } from "react-redux"
import { getTodosSelector } from "../redux/selectors"
import { AppState } from "../redux/reducers"

export interface TodoListProps {
  todos: Todo[]
}

const onTodoClick = () => {
  console.log('Todo clicked!');
};

const mapStateToProps = (state: AppState) => ({
  todos: state.todos
});

const TodoListComponent = ({ todos }: TodoListProps) => {
  const todoItems = todos.map(todo => (<TodoItem key={todo.id} todo={todo} onClick={onTodoClick} />))
  return (
    <ul>
      {todoItems}
    </ul>
  )
}

const connector = connect(mapStateToProps)

// const mapStateToProps = state => {
//   const { visibilityFilter } = state;
//   const todos = getTodosByVisibilityFilter(state, visibilityFilter);
//   return { todos };
//   //   const allTodos = getTodos(state);
//   //   return {
//   //     todos:
//   //       visibilityFilter === VISIBILITY_FILTERS.ALL
//   //         ? allTodos
//   //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
//   //           ? allTodos.filter(todo => todo.completed)
//   //           : allTodos.filter(todo => !todo.completed)
//   //   };
// };

export const TodoList = connector(TodoListComponent);