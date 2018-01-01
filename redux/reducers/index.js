import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AlertsReducer from './reducer_alerts';
import IssuesReducer from './reducer_issues';
import ProjectsReducer from './reducer_projects';
import WorkflowsReducer from './reducer_workflows';
import WorkflowStatusesReducer from './reducer_workflow_statuses';

const rootReducer = combineReducers({
    form: formReducer,
    alerts: AlertsReducer,
    issues: IssuesReducer,
    projects: ProjectsReducer,
    workflows: WorkflowsReducer,
    workflowStatuses: WorkflowStatusesReducer
});

export default rootReducer;