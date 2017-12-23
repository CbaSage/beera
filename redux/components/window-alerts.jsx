import React from 'react';
import { connect } from 'react-redux';

import {
    Alert
} from 'react-bootstrap';

import { removeAlert } from "../actions/actions_alerts";

class WindowAlerts extends React.Component {
    render() {
        return _.map(this.props.alerts, alert => {
            //Auto de-queue the alert
            setTimeout(() => {
                this.props.removeAlert(alert);
            }, alert.timeout || 3000);

            return (
                <Alert key={alert.message} bsStyle={alert.style || 'warning'}
                       className="slideInDown animated"
                       style={ {position: 'fixed', width: '100%', zIndex: '1000'} }
                >
                    {alert.message}
                </Alert>
            );
        });
    }
}

function mapStateToProps(state) {
    return { alerts: state.alerts };
}

export default connect(mapStateToProps, { removeAlert })(WindowAlerts);