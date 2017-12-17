import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IssuesHome from '../components/issue/issues_home.jsx';
import IssueShow from '../components/issue/issue_show.jsx';

export default function IssuesRoutes ({ match }) {
  return (
      // here's a nested div
      <div>
          {/* here's a nested Route, match.url helps us make a relative path */}
          <Route path={match.url + '/:id'} component={IssueShow} />
          <Route path={match.url + '/'} component={IssuesHome} />
      </div>
  );
}