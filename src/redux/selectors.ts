import { AppState } from "./reducers";


export const getTodosSelector = (store: AppState) => store.todos;