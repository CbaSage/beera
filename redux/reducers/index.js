import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import IssuesReducer from './reducer_issues';

const rootReducer = combineReducers({
    form: formReducer,
    issues: IssuesReducer
});

export default rootReducer;