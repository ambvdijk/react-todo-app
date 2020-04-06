import { Action } from "redux";
import { Todo } from "../domain/Todo";

export enum TodoActionType {
  Add = '[Todo Add]',
  Remove = '[Todo Remove]',
}

export class AddTodoAction implements Action {
  public readonly type = TodoActionType.Add;
  constructor(public payload: Todo) {

  }
}

export class RemoveTodoAction implements Action {
  public readonly type = TodoActionType.Remove
  constructor(public payload: number) {

  }
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction
