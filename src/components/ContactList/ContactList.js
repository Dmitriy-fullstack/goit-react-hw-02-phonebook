
import PropTypes from 'prop-types'

function ContactList({contacts}) {
    return (
        <>
            <ul>
                {contacts.map(contact => {
                    const {id, name} = contact;
                    return (<li>
                        <p>Name: {name}</p>
                        <p>Id: {id}</p>
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

