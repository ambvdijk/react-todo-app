export type Todo = {
  id: string;
  title: string;
  next: string | null;
  prev: string | null;
};

export type TodoState = {
  todos: Todo[];
};
