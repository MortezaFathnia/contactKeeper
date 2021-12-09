import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
             <FontAwesomeIcon icon={faCreditCard} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
};


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps={
    title:'Contact Keeper'
}


export default Navbar