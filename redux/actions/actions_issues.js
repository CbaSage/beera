import axios from 'axios';

import {alertApiErrors} from "../utils/axios_utils";

export const FETCH_ISSUE = 'FETCH_ISSUE';
export const FETCH_ISSUES = 'FETCH_ISSUES';
export const CREATE_ISSUE = 'CREATE_ISSUE';

export function fetchIssue(id) {
    const request = axios.get(route('fetch-issue', {issue: id}));
    return {
        type: FETCH_ISSUE,
        payload: request
    };
}

export function fetchIssues() {
    const request = axios.get(route('fetch-issues'));

    return {
        type: FETCH_ISSUES,
        payload: request
    };
}

export function createIssue(values) {
    return function (dispatch) {
        return axios.post(route('create-issue'), values)
            .then(resp => {
                dispatch(createIssueSuccess(resp))
            })
            .catch(err => {
                dispatch(alertApiErrors(err))
            });
    }
}

function createIssueSuccess(resp) {
    return {
        type: CREATE_ISSUE,
        payload: resp
    };
}