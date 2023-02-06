import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TodoState } from "./models";
import { findLastTodo } from "./selectors";

export const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const lastTodo = findLastTodo(state.todos);
      const newTodo = { title: action.payload, id: uuidv4() };
      if (lastTodo) {
        state.todos.push({ ...newTodo, prev: lastTodo.id, next: null });
        lastTodo.next = newTodo.id;
        return;
      }
      state.todos.push({ ...newTodo, prev: null, next: null });
    },
  },
});

export const { add } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
