import React from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { Todo } from './Todo';

function App() {

  const todos: Todo[] = [
    { id: 1, title: 'Todo 3', text: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Todo 4', text: 'Lorem ipsum dolor sit amet.' }
  ];

  return (
    <section className="App">
      <header className="App-header">
        Todo App
      </header>
      <main>
        <TodoList todos={todos} onTodoClick={console.log} />
      </main>
    </section>
  );
}

export default App;