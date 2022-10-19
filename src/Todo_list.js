// holds all of our todos
import React from 'react'

const Todo_list = (todos) =>
{
  return (
    <div>
        {todos.map(todo =>{
            return(
                <Todo todo = {todo} />
            )
        })} 
    </div>
  )
}

export default Todo_list