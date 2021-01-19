import React, { Component } from 'react'

import style from './contactForm.module.css';
import shortid from 'shortid';
import { v4 as uuidv4 } from 'uuid';


export default class ContactForm extends Component {
   state = {
    name: ''
}

nameInputId = shortid.generate();

handleChange = event => {
       const {name, value} = event.currentTarget
       this.setState({[name]: value})
   }

   handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.handleClearState();
        
    }

   handleClearState = () => {
       this.setState({name:''})
   }

    render() {
        return (
            <div>
                <form className={style.form} onSubmit={this.handleSubmit}> 
                    <label className={style.labelName} htmlFor={this.nameInputId}>Name:</label>
                    <input className={style.inputName} type='text' name='name' value={this.state.name} id={this.nameInputId}  onChange={this.handleChange}/> 
                     

                    <button className={style.buttonAdd} type='submit'>Add contact</button>
                </form> 
            </div>
        )
    }
}



