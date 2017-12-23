import React from 'react';
import { connect } from 'react-redux';
import RichTextEditor from '../form/editor/rich-text-editor.jsx';

import {
    Col,
    Panel,
    Row
} from 'react-bootstrap';

import IssueForm from './issue_form.jsx';

class IssueNew extends React.Component {
    handleSubmit = (values) => {
        console.log(values)
    }

    render() {
        return (
            <Row>
                <Col md={3}>
                    <Panel bsStyle="primary" header="Create New Issue">
                        <IssueForm onSubmit={this.handleSubmit} />
                    </Panel>
                </Col>
                <Col md={9}>
                    <RichTextEditor />
                </Col>
            </Row>
        );
    }
}

export default connect(null, null)(IssueNew);
