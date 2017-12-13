import React from 'react';

import {
    FormGroup,
    FormControl,
    MenuItem,
    Nav,
    Navbar,
    NavDropdown,
    NavItem
} from 'react-bootstrap';

import MainNav from './components/navs/main-nav.jsx';

export default function() {
    return (
        <div>
            <header>
                <MainNav/>
            </header>
        </div>
    );
}