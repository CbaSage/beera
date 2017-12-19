import {ADD_ALERTS} from "../actions/actions_alerts";

export function alertApiErrors(err){
    const alerts = _.map(err.response.data.errors, err => {
        return {
            message: err,
            style:'danger'
        };
    });

    return {
        type: ADD_ALERTS,
        payload: alerts
    };
}