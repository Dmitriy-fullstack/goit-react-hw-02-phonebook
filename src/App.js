import React, { Component } from 'react'
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';


class App extends Component {
  

  onSubmitHendler = data => {
    console.log(data);
  }

 render() {
   return (
    <div className="App">
      
      <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitHendler}/>

        <h2>Contacts</h2>
        <ContactList contacts={this.data} /> 
    </div>
  )
 } 
  
}

export default App;
