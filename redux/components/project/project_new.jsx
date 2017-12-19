import React from 'react';
import { connect } from 'react-redux';

import {
    Col,
    Panel,
    Row
} from 'react-bootstrap';

import { createProject } from "../../actions/actions_projects.js";
import ProjectForm from './project_form.jsx';

class ProjectNew extends React.Component {
    handleSubmit = (values) => {
        this.props.createProject(values);
    }

    render() {
        return (
            <Row>
                <Col md={3}>
                    <Panel bsStyle="primary" header="Create New Project">
                        <ProjectForm onSubmit={this.handleSubmit} />
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default connect(null, {createProject})(ProjectNew);
