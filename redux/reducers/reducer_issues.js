import _ from 'lodash';

import {
    FETCH_ISSUE,
    FETCH_ISSUES,
    CREATE_ISSUE,
    UPDATE_ISSUE_FIELD
} from "../actions/actions_issues.js";

export default function (state = {}, action) {
    switch(action.type) {
        case CREATE_ISSUE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_ISSUE:
            return {...state, [action.payload.data.id]: action.payload.data };
        case UPDATE_ISSUE_FIELD:
            return {...state, [action.payload.data.id]: action.payload.data };
        case FETCH_ISSUES:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}