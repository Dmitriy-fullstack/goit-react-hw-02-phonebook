import  { Component } from 'react'
import PropTypes from 'prop-types'
import style from './filter.module.css';
import shortid from 'shortid';

export default class Filter extends Component {

state ={
    filter: ''
}

filterInputId = shortid.generate();

handleChangeFilter = event => {
    this.setState({filter: event.currentTarget.value})
}

    

    render() {
        console.log(this.state);
        return (
            <div>
                <label htmlFor={this.filterInputId}>Find contacts by name:</label>
                <input type="text" id={this.filterInputId} name="filter" value={this.state.filter} onChange={this.handleChangeFilter}/>
                
            </div>
        )
    }
}

Filter.propTypes ={
    filter: PropTypes.string,
}