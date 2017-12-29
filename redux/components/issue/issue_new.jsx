import React from 'react';
import { connect } from 'react-redux';

import { createIssue } from "../../actions/actions_issues";

import {
    Col,
    Panel,
    Row
} from 'react-bootstrap';

import IssueForm from './issue_form.jsx';

class IssueNew extends React.Component {
    handleSubmit = (values) => {
        this.props.createIssue(values);
    }

    render() {
        return (
            <Panel bsStyle="primary" header="Create New Issue">
                <Row>
                    <Col md={10} mdOffset={1}>
                        <IssueForm
                            submitText="Create Issue"
                            onSubmit={this.handleSubmit}
                        />
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default connect(null, { createIssue })(IssueNew);
