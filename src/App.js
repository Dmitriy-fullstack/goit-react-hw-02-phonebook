import React, { Component } from 'react'
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state ={
    contacts: []
  }

  onSubmitHendler = data => {
    const newContacts ={
      name: data.name,
      id: uuidv4()
    }
    this.setState((prevState => {
         return ({contacts: [...prevState.contacts, newContacts]})
        }))
    console.log(this.state);
  }

 render() {
   return (
    <div className="App">
      
      <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitHendler}/>

        <h2>Contacts</h2>
        {/* <ContactList />  */}
    </div>
  )
 } 
  
}

export default App;
