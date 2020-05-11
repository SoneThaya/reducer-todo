import React from 'react';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
