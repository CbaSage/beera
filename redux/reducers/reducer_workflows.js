import _ from 'lodash';

import {
    CREATE_WORKFLOW,
    FETCH_WORKFLOWS
} from "../actions/actions_workflows";

export default function (state = {}, action) {
    switch(action.type) {
        case CREATE_WORKFLOW:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_WORKFLOWS:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}