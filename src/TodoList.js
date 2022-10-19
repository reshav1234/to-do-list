// holds all of our todos
import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) =>
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

export default TodoList