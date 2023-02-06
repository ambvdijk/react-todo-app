import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Todo, TodoState } from "./models";

const selectToDoFeature = (state: RootState) => state.todo;

export const selectTodos = createSelector(
  [selectToDoFeature],
  (state: TodoState) => {
    return state.todos;
  }
);

export const findLastTodo = (todos: Todo[]) => todos.find((todo) => !todo.next);
export const findFirstTodo = (todos: Todo[]) =>
  todos.find((todo) => !todo.prev);

export const selectFirstTodo = createSelector([selectTodos], findFirstTodo);

export const selectLastTodo = createSelector([selectTodos], findLastTodo);
