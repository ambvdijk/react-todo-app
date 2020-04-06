import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoFormComponent } from './components/TodoForm';

export const App = () => {
  return (
    <section className="App">
      <header className="App-header">
        Todo App
      </header>
      <main>
        <TodoList />
        <TodoFormComponent />
      </main>
    </section>
  );
}
