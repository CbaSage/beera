import _ from 'lodash';

import {
    ADD_ALERT,
    ADD_ALERTS,
    REMOVE_ALERT,
} from "../actions/actions_alerts.js";

export default function (state = {}, action) {
    switch(action.type) {
        case ADD_ALERT:
            return { ...state, [action.payload.message]: action.payload };
        case ADD_ALERTS:
            const additionalState = _.mapKeys(action.payload, 'message');
            return { ...state, ...additionalState };
        case REMOVE_ALERT:
            if(_.has(state, action.payload.message)){
                return _.omit(state, action.payload.message);
            }

    }

    return state;
}

