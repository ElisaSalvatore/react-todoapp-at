import React from "react";
import './Form.css';

//classi con state
export default class Form extends React.Component {
    state = {
        value: '',
    }
    //passare attraverso il submit il valore dell'input, e passarlo quindi ad un prop in App/Form
    handleSubmit = (e) => {
        if(this.state.value.trim() === ''){
            alert("scrivi un todo")
            return;
        }

        e.preventDefault(); //così il todo appena inserito non si cancella subito
        this.props.submit(this.state.value);
        this.setState({value: ''}); //input torna vuoto una volta aggiunto il todo
    }

    //cambiare lo state del nuovo todo con ciòc he inserisce l'utente (prima era stringa vuota)
    onChangeText = (e) => {
        //console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
           <input className="input" type="text" value={this.state.value} placeholder="aggiungi todo" onChange={this.onChangeText}/>
        </form>
      )
    }
  }