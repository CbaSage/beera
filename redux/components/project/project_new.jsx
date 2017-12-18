import React from 'react';

import {
    Col,
    Panel,
    Row
} from 'react-bootstrap';

import ProjectForm from './project_form.jsx';

export default class ProjectNew extends React.Component {
    render() {
        return (
            <Row>
                <Col md={3}>
                    <Panel bsStyle="primary" header="Create New Project">
                        <ProjectForm />
                    </Panel>
                </Col>
            </Row>
        );
    }
}
