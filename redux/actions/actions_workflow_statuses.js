import axios from 'axios';

export const CREATE_WORKFLOW_STATUS = 'CREATE_WORKFLOW_STATUS';
export const FETCH_WORKFLOW_STATUSES = 'FETCH_WORKFLOW_STATUSES';

import {alertApiErrors} from "../utils/axios_utils";

export function createWorkflowStatus(values, callback) {
    return function (dispatch) {
        return axios.post(route('create-workflow-status'), values)
            .then(resp => {
                dispatch(createWorkflowStatusSuccess(resp, callback))
            })
            .catch(err => {
                dispatch(alertApiErrors(err))
            });
    }
}

function createWorkflowStatusSuccess(resp, callback) {
    callback();

    return {
        type: CREATE_WORKFLOW_STATUS,
        payload: resp
    };
}

export function fetchWorkflowStatuses(callback) {
    const request = axios.get(route('fetch-workflow-statuses'))
        .then((resp) => {
            callback();
            return resp;
        });
    ;

    return {
        type: FETCH_WORKFLOW_STATUSES,
        payload: request
    };
}