import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css'

function Navigation() {

    return (

        <div className="navigation">

            <Link className='navigation--link' to="/">Home</Link>

            <Link className='navigation--link' to="/projects">Projects</Link>

            <Link className='navigation--link' to="/about">About</Link>

            <Link className='navigation--link' to="/contact">Contact</Link>
        </div>
    );
}

export default Navigation;
