import React from 'react';
import { connect } from 'react-redux';

import {
    Col,
    Panel,
    Row
} from 'react-bootstrap';

import { createWorkflowStatus } from "../../actions/actions_workflow_statuses";
import WorkflowStatusForm from './workflow_status_form.jsx';

class WorkflowStatusNew extends React.Component {
    handleSubmit = (values) => {
        this.props.createWorkflowStatus(values, () => this.props.history.push('/workflow-statuses'));
    }

    render() {
        return (
            <Row>
                <Col md={3}>
                    <Panel bsStyle="primary" header="Create New Status">
                        <WorkflowStatusForm onSubmit={this.handleSubmit} />
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default connect(null, { createWorkflowStatus })(WorkflowStatusNew);
