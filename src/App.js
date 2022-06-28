import React from 'react';
import Todo from './components/Todo.js';
import Form from './components/Form.js';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {name:"imparare React", completato: false},
      {name:"imparare gli state", completato: false},
      {name:"imparare i component", completato: false},
    ]
  }

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, {name: todo}];
    this.setState({
      todos: newTodos
    })
  }

  completaTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].completato = true;
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
       <div className='app'>
          <div className='todo-list'>
            {this.state.todos.map((todo, index) => (
              <Todo key={index} todo={todo} index={index} completaTodo={this.completaTodo}/>
            ))}
            <Form submit={this.addTodo}/>
          </div>
       </div> 
    )
  
  }
}

export default App;
