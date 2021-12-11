import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent,clearCurrent } = contactContext;

    const { _id, name, email, phone, type } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    };


    return (
        <div className="card bg-list">
            <h3 className="text-primary text-left">
                {name.charAt(0).toUpperCase() + name.slice(1)}{' '}
                <span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && (
                    <li><FontAwesomeIcon icon={faEnvelope} />{' '}{email}</li>
                )}
                {phone && (
                    <li> <FontAwesomeIcon icon={faPhone} />{' '}{phone}</li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}


export default ContactItem
