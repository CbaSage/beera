import _ from 'lodash';

import {
    CREATE_PROJECT,
    FETCH_PROJECTS
} from '../actions/actions_projects';

export default function (state = {}, action) {
    switch(action.type) {
        case CREATE_PROJECT:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_PROJECTS:
            return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}