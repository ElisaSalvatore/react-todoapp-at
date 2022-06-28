import React from "react";
import './Todo.css';

//funzioni senza state
export default function Todo(props) {
  return (
    <div style={{textDecoration: props.todo.completato ? 'line-through' : ''}} className='todo'>
      {props.todo.name}
      <div>
        <button onClick={() => props.completaTodo(props.index)}> done </button>
      </div>  
    </div>
  )
}