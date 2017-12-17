import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import IssuesReducer from './reducer_issues';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
    form: formReducer,
    issues: IssuesReducer,
    projects: ProjectsReducer

});

export default rootReducer;