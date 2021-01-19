
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import style from './contactList.module.css';


function ContactList( {contacts} ) {
    return (
        <>
            <ul>
                {contacts.map(contact => {
                    const {name, number} = contact;
                    return (<li className={style.listItem} key={uuidv4()}>
                        <p className={style.listItemName}>{name}: {number}</p>
                        
                    </li>)
                })} 
            </ul>   
        </>
    )
}

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
),
}

export default ContactList

