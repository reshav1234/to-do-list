import React, { useState } from 'react';
import './App.css';
import data from "./data.json";
import Header from './Header'
import Todo_list from './Todo_list';
import Todo from './Todo';

// So we will be making todo list
// We will be working with hooks
const App = () =>
{
  const [todos, setTodos] = useState(data);
  return(
    <div>
      <Header />
      <Todo_list todos = {todos} />
    </div>
  )
}


export default App;
