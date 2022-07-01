import React, { useState } from 'react';
import './App.css';

//COMPONENTE TODO
const Todo = (props) => {
  const {todo} = props;
  return (
    <div style={{textDecoration: todo.completato ? 'line-through' : ''}} className='todo'>
      {todo.name}
      <div>
        <button onClick={() => props.completaTodo(props.index)}> done </button>
      </div>  
    </div>
  )
}

//COMPONENTE FORM
const Form = (props) => {
  const [value, setValue] = useState();
  //passare attraverso il submit il valore dell'input, e passarlo quindi ad un prop in App/Form
  const handleSubmit = (e) => {
    e.preventDefault(); //così il todo appena inserito non si cancella subito

    if(value.trim() === ''){
      alert("scrivi un todo")
      return;
    }
    props.submit(value);
    setValue(''); //input torna vuoto una volta aggiunto il todo
  }

  //cambiare lo state del nuovo todo con ciòc he inserisce l'utente (prima era stringa vuota)
  const onChangeText = (e) => {
      //console.log(e.target.value)
      setValue(e.target.value);
  }
  
  return (
  <form onSubmit={handleSubmit}>
      <input className="input" type="text" value={value} placeholder="aggiungi todo" onChange={onChangeText}/>
  </form>
  )
}

//COMPONENTE APP
const App = () => {
  const [todos, setTodos] = useState([
    { name: "imparare React", completato: false },
    { name: "imparare gli state", completato: false },
    { name: "imparare i component", completato: false },
  ])

  const addTodo = (todo) => {
    const newTodos = [...todos, { name: todo }];
    setTodos(newTodos);
  }

  const completaTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completato = true;
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((item, index) => (
          <Todo key={index} todo={item} index={index} completaTodo={completaTodo} />
        ))}
        <Form submit={addTodo} />
      </div>
    </div>
  )
}

export default App;
