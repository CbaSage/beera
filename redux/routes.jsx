import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IssuesHome from './components/issue/issues_home.jsx';
import IssueShow from './components/issue/issue_show.jsx';

export default class extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/issues/:id" component={IssueShow} />
                        <Route path="/" component={IssuesHome} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}