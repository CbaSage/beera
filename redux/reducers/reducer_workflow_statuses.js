import _ from 'lodash';

import {
    CREATE_WORKFLOW_STATUS,
    FETCH_WORKFLOW_STATUSES
} from "../actions/actions_workflow_statuses";

export default function (state = {}, action) {
    switch(action.type) {
        case CREATE_WORKFLOW_STATUS:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_WORKFLOW_STATUSES:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}