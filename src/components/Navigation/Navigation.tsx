import React, { useState } from 'react';

import NavigationButton from './NavigationButton/NavigationButton';
import NavigationLink from './NavigationLink/NavigationLink';

import './Navigation.css'

function Navigation({ links }: any) {

    const [is_hidden, set_hidden] = useState(true);

    function handle_click() {

        set_hidden(!is_hidden);
    }

    return (

        <div className="navigation">

            <NavigationButton color={is_hidden ? 'var(--night)' : 'var(--white)'} change_state={handle_click} />

            <div className={`navigation--menu ${is_hidden ? 'navigation--menu-hidden' : ''}`}>

                {links.map((link: any, index: number) => (

                    <NavigationLink label={link.label} path={link.path} change_state={handle_click} />
                ))}
            </div>
        </div>
    );
}

export default Navigation;
