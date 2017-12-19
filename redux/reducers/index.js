import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AlertsReducer from './reducer_alerts';
import IssuesReducer from './reducer_issues';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
    form: formReducer,
    alerts: AlertsReducer,
    issues: IssuesReducer,
    projects: ProjectsReducer

});

export default rootReducer;