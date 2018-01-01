import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import IssuesRoutes from './routes_issues.jsx';
import ProjectsRoutes from './routes_projects.jsx';
import WorkflowRoutes from './routes_workflows.jsx';
import WorkflowStatusRoutes from './routes_workflow_statuses.jsx';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/issues" component={IssuesRoutes}/>
                    <Route path="/projects" component={ProjectsRoutes}/>
                    <Route path="/workflows" component={WorkflowRoutes}/>
                    <Route path="/workflow-statuses" component={WorkflowStatusRoutes}/>
                </Switch>
            </div>
        );
    }

}