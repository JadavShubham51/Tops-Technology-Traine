import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleComplete } from './todoSlice';

function TodoList() {
    const todos = useSelector(state=>state.todos.todos);
    const dispatch = useDispatch()
  return (
    <div>
      <ul>
        {todos.map(todo =>(
            <li key={todo.id}>
                <input type="checkbox" 
                    checked={todo.completed}
                    onChange={()=>dispatch(toggleComplete(todo.id))}
                />
                <span style={{textDecoration:todo.completed?'line-through':'none'}}>
                    {todo.text}
                </span>
                <button onClick={()=>dispatch(removeTodo(todo.id))}>remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
