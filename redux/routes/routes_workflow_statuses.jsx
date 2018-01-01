import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WorkflowStatusesHome from '../components/workflow-status/workflow_statuses_home.jsx';
import WorkflowStatusesNew from '../components/workflow-status/workflow_status_new.jsx';

export default function WorkflowStatusRoutes ({ match }) {
  return (
      // here's a nested div
      <div>
          {/* here's a nested Route, match.url helps us make a relative path */}
          <Switch>
              <Route path={match.url + '/new'} component={WorkflowStatusesNew} />
              {/*<Route path={match.url + '/:id'} component={IssueShow} />*/}
              <Route path={match.url + '/'} component={WorkflowStatusesHome} />
          </Switch>
      </div>
  );
}