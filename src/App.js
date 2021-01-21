import React, { Component } from 'react'
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';


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
     
     if(this.state.contacts.find(({name}) => name.toLowerCase() === data.name.toLowerCase())) {swal("Cant add!", "Contact already exist!", "error")
     return}

     this.setState(( {contacts} ) => {return ({contacts: [...contacts, newContacts]})
        }
      )
    
    }

  onFilterHendler = data => {
  this.setState({filter: data})
  }
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

 render() {
    const visibleContacts = this.getVisibleContacts();
  
   return (
    <div className="App">
      <div className='appInputMenu'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitHendler}/>
      </div>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeFilter={this.onFilterHendler}/>
        <ContactList contacts={visibleContacts}/> 
    </div>
  )
 } 
  
}

export default App;
