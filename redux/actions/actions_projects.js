import axios from 'axios';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

// export function fetchIssue(id) {
//     const request = axios.get(route('fetch-issue', {issue: id}));
//     return {
//         type: FETCH_ISSUE,
//         payload: request
//     };
// }

export function fetchProjects() {
    const request = axios.get(route('fetch-projects'));

    return {
        type: FETCH_PROJECTS,
        payload: request
    };
}