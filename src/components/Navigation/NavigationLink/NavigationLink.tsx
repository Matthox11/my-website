import React from 'react';

import { Link } from 'react-router-dom';

import './NavigationLink.css'

interface NavigationLinkProps {

    label: string;
    path: string;

    change_state: () => void;
}

function NavigationLink(props: NavigationLinkProps) {

    function handle_click() {

        props.change_state()
    }

    return (

        <div className="navigation-link">

            <Link className='navigation-link--link' to={props.path} onClick={handle_click}>{props.label}</Link>
        </div>
    );
}

export default NavigationLink;
