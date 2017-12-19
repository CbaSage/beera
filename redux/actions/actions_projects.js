import axios from 'axios';

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

import {alertApiErrors} from "../utils/axios_utils";

export function createProject(values) {
    return function (dispatch) {
        return axios.post(route('create-project'), values)
            .then(resp => {
                dispatch(createProjectSuccess(resp))
            })
            .catch(err => {
                dispatch(alertApiErrors(err))
            });
    }
}

function createProjectSuccess(resp) {
    return {
        type: CREATE_PROJECT,
        payload: resp
    };
}

export function fetchProjects() {
    const request = axios.get(route('fetch-projects'));

    return {
        type: FETCH_PROJECTS,
        payload: request
    };
}