import React, { useState } from 'react';
import './App.css';
import data from "./data.json";
import Header from './Header'
import TodoList from './TodoList';
//import Todo from './Todo';

// So we will be making todo list
// We will be working with hooks
const App = () =>
{
  const [todos, setTodos] = useState(data);
  return(
    <div>
      <Header />
      <TodoList todos = {todos} />
    </div>
  )
}


export default App;
