import axios from 'axios';

export const FETCH_ISSUE = 'FETCH_ISSUE';
export const FETCH_ISSUES = 'FETCH_ISSUES';

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