
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


function ContactList( {contacts} ) {
    return 
        // <>
        //     {console.log(this.contacts)}
        //     <ul>
        //         { {contacts.(contact => {
        //             const {id, name} = contact;
        //             return (<li key={uuidv4()}>
        //                 <p>Name: {name}</p>
                        
        //             </li>)
        //         })} }
        //     </ul>   
        // </>
    
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

