import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    CONTACT_ERROR,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';
import axios from 'axios';

const ContactState = props => {
    const initialState = {
        contacts: null,
        current: null,
        error: null,
        filtered: null
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);
    //Get Contacts
    const getContacts = async contact => {
        try {
            const res = await axios.get('/api/contacts');
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            })
        }

    };

    //Add Contact
    const addContact = async contact => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/contacts', contact, config);
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            })
        }

    };

    //Delete Contact
    const deleteContact = async id => {
        try {
            await axios.delete(`/api/contacts/${id}`);
            dispatch({
                type: DELETE_CONTACT,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            })
        }
    }

     //Update Contact
     const updateContact = async contact => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
            dispatch({
                type: UPDATE_CONTACT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            })
        }
    }

    //Clear Contacts
    const clearContacts = contact => {
        dispatch({ type: CLEAR_CONTACTS })
    }

    //Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

   

    //Filter Contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    //Clear Filter
    const clearFilter = text => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                getContacts,
                addContact,
                deleteContact,
                clearContacts,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
