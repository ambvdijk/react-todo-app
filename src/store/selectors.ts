import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import * as Features from './features';

const selectToDoFeature = (state: RootState) => state.todo;

export const selectTodos = createSelector(
  [selectToDoFeature],
  (state: Features.Todo.TodoState) => {
    return state.todos;
  }
);
