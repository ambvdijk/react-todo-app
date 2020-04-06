import { combineReducers } from "redux";
import { Todo } from "../domain/Todo"
import { TodoActionType, TodoActionTypes } from "./actions"

const initialState: Todo[] = [
  { id: 1, title: 'Todo 1', text: 'Some todo text'}
]

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case TodoActionType.Add:
      return state.concat(action.payload);
    case TodoActionType.Remove:
      return state.splice(state.findIndex(todo => todo.id === action.payload));
    default:
      return state;
  }
}


export const rootReducer = combineReducers({ todos: todoReducer });

export type AppState = ReturnType<typeof rootReducer>
