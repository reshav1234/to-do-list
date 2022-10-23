import React, { useState } from 'react';
import './App.css';

const App = () =>
{

  // Array to store the todos
  const [list, setList] = useState([])
  // Keep track of user input
  const [input, setInput] = useState("") 


  // Add todo
  const addTodo = (todo) =>
  {
    const newTodo = {
      id: Math.random(),
      todo : todo
    }
    // Add new todo to the existing list
    setList([...list, newTodo]) // Three dots to indicate existing element

    // After adding todo clears input box
    setInput("")
  }

  // Delete todo list
  const deleteTodo = (id) =>
  {
    // Filter out todo with id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList)
  }


  return(
    <>
      <h1>Todo List</h1>
      <input type = "text" value = {input} onChange = {(e) => setInput(e.target.value)} />
      <button onClick = {() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key = {todo.id}>
            {todo.todo}
            <button onClick = {() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}


export default App;
