import React, { Component } from 'react'
import style from './contactForm.module.css';
import shortid from 'shortid';


export default class ContactForm extends Component {
   state = {
    name: '',
    contacts: []
    
   }

   nameInputId = shortid.generate();
   nameContactsId = shortid.generate();

   handleChange = event => {
       const {name, value} = event.currentTarget
       this.setState({[name]: value})
   }

   handleSubmit = e => {
        e.preventDefault();
        const contacts = [...this.state.contacts, { name: this.state.name, id: this.nameContactsId},
        ];
        this.setState({ contacts });
        
        this.props.onSubmit(this.state);


        this.handleClearState();
        console.log(this.state); 
          
    }

   handleClearState = () => {
       this.setState({name:''})
   }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor={this.nameInputId}>
                        Name: <input type='text' name='name' value={this.state.name} id={this.nameInputId}  onChange={this.handleChange}/> 
                    </label> 

                    <button className={style.buttonAdd} type='submit'>Add contact</button>
                </form> 
            </div>
        )
    }
}



