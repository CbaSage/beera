import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainNav from './components/navs/main-nav.jsx';
import Routes from './routes.jsx';

export default function() {
    return (
        <div>
            <header>
                <MainNav/>
            </header>
            <div id="app-body-container">
                {/*<BrowserRouter>*/}
                    {/*<div>*/}
                        {/*<Switch>*/}
                            {/*<Route path="/posts/new" component={PostsNew} />*/}
                            {/*<Route path="/posts/:id" component={PostsShow} />*/}
                            {/*<Route path="/" component={PostsIndex} />*/}
                        {/*</Switch>*/}
                    {/*</div>*/}
                {/*</BrowserRouter>*/}
                <Routes />
            </div>
        </div>
    );
}