import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProjectNew from '../components/project/project_new.jsx';

export default function ProjectsRoutes ({ match }) {
    return (
        <div>
            {/*<Route path={match.url + '/:id'} component={IssueShow} />*/}
            <Route path={match.url + '/new'} component={ProjectNew} />
        </div>
    );
}