import _ from 'lodash';

import {
    FETCH_ISSUE,
    FETCH_ISSUES
} from "../actions/actions_issues.js";

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_ISSUE:
            return {...state, [action.payload.data.id]: action.payload.data };
        case FETCH_ISSUES:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}