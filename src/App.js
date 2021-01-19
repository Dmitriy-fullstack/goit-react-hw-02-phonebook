import React, { Component } from 'react'
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state ={
  contacts: [],
  filter: '',
  name: '',
  number: ''
  }

  onSubmitHendler = data => {
      const newContacts ={
      number: data.number,
      name: data.name,
      id: uuidv4()
    }
    this.setState(( {contacts} ) => {
         return ({contacts: [...contacts, newContacts]})
        })
    
  }

 render() {

   return (
    <div className="App">
      <div className='appInputMenu'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitHendler}/>
      </div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts}/> 
    </div>
  )
 } 
  
}

export default App;
