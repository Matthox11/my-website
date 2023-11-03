import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './NavigationButton.css'

interface NavigationButtonProps {

    color: string;

    change_state: () => void;
}

function NavigationButton(props: NavigationButtonProps) {

    function handle_click() {

        props.change_state()
    }

    return (

        <div className="navigation-button">

            <FontAwesomeIcon className='navigation-button--icon' onClick={handle_click} icon={faBars}
                style={{ color: props.color }} />
        </div>
    );
}

export default NavigationButton;
