import _ from 'lodash';

// import {
//     CREATE_ISSUE,
//     FETCH_POSTS,
//     FETCH_POST,
//     DELETE_POST
// } from '../actions/index.js';

import {
    FETCH_ISSUE,
    FETCH_ISSUES
} from "../actions/actions_issues.js";

export default function (state = {}, action) {
    switch(action.type) {
        // case FETCH_POST:
        //     return { ...state, [action.payload.data.id]: action.payload.data };
        // case FETCH_POSTS:
        //     return _.mapKeys(action.payload.data, 'id');
        // case CREATE_POST:
        //     return action.payload.data;
        // case DELETE_POST:
        //     return _.omit(state, action.payload);
        case FETCH_ISSUE:
            return {...state, [action.payload.data.id]: action.payload.data };
        case FETCH_ISSUES:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}