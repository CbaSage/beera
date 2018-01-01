import axios from 'axios';

export const CREATE_WORKFLOW = 'CREATE_WORKFLOW';
export const FETCH_WORKFLOWS = 'FETCH_WORKFLOWS';

import {alertApiErrors} from "../utils/axios_utils";

export function createWorkflow(values, callback) {
    return function (dispatch) {
        return axios.post(route('create-workflow'), values)
            .then(resp => {
                dispatch(createWorkflowSuccess(resp, callback))
            })
            .catch(err => {
                dispatch(alertApiErrors(err))
            });
    }
}

function createWorkflowSuccess(resp, callback) {
    callback();

    return {
        type: CREATE_WORKFLOW,
        payload: resp
    };
}

export function fetchWorkflows(callback) {
    const request = axios.get(route('fetch-workflows'))
        .then((resp) => {
            callback();
            return resp;
        });
    ;

    return {
        type: FETCH_WORKFLOWS,
        payload: request
    };
}