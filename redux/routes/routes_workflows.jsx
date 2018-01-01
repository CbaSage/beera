import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WorkflowsHome from '../components/workflow/workflows_home.jsx';
import WorkflowNew from '../components/workflow/workflow_new.jsx';

export default function WorkflowRoutes ({ match }) {
  return (
      // here's a nested div
      <div>
          {/* here's a nested Route, match.url helps us make a relative path */}
          <Switch>
              <Route path={match.url + '/new'} component={WorkflowNew} />
              {/*<Route path={match.url + '/:id'} component={IssueShow} />*/}
              <Route path={match.url + '/'} component={WorkflowsHome} />
          </Switch>
      </div>
  );
}