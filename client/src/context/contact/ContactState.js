import React,{useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTERS,
    UPDATE_CONTACT,
    SET_CONTACT
} from '../types';

const ContactState= props=>{
    const initialState={
        contacts:[
            {
                id:1,
                name:'jill Johnson',
                email:'jill@gmail.com',
                phone:'111-111-111',
                type:'personal'
            },
            {
                id:2,
                name:'john Doe',
                email:'john@gmail.com',
                phone:'222-222-222',
                type:'personal'
            },
            {
                id:3,
                name:'sara Williams',
                email:'sara@gmail.com',
                phone:'333-333-333',
                type:'personal'
            },
            {
                id:4,
                name:'harry White',
                email:'harry@gmail.com',
                phone:'444-444-444',
                type:'personal'
            }
        ]
    };
    const [state,dispatch] = useReducer(contactReducer,initialState); 
    
    //Add Contact


    //Delete Contact

    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return(
        <ContactContext.Provider
        value={{
            contacts:state.contacts            
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
