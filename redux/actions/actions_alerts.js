import { bindActionCreator } from 'react-redux';

export const ADD_ALERT = 'ADD_ALERT';
export const ADD_ALERTS = 'ADD_ALERTS';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export function addAlert(message, style = 'warning', timeout = 3000) {
    const payload = {
        message: message,
        style: style,
        timeout: timeout
    };

    return {
        type: ADD_ALERT,
        payload: payload
    };
}

export function addAlerts(alerts) {
    return {
        type: ADD_ALERT,
        payload: alerts
    };
}


export function removeAlert(alert = {}) {
    return {
        type: REMOVE_ALERT,
        payload: alert
    };
}

