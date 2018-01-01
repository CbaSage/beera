import React from 'react';
import { connect } from 'react-redux';

import {
    Col,
    Panel,
    Row
} from 'react-bootstrap';

import { createWorkflow } from "../../actions/actions_workflows";
import WorkflowForm from './workflow_form.jsx';

class WorkflowNew extends React.Component {
    handleSubmit = (values) => {
        this.props.createWorkflow(values, () => this.props.history.push('/workflows'));
    }

    render() {
        return (
            <Row>
                <Col md={3}>
                    <Panel bsStyle="primary" header="Create New Project">
                        <WorkflowForm onSubmit={this.handleSubmit} />
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default connect(null, { createWorkflow })(WorkflowNew);
