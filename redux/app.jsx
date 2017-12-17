import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainNav from './components/navs/main-nav.jsx';
import Routes from './routes/routes.jsx';

export default function() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <header>
                        <MainNav/>
                    </header>
                    <div id="app-body-container">
                        <Routes />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}