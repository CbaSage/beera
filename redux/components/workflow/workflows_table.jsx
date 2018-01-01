import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Link } from 'react-router-dom';

import { Table } from 'react-bootstrap';

class WorkflowsTable extends React.Component {
    render() {
        return (
            <Table bordered striped>
                <thead>
                <tr>
                    <th>Workflow</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>
        )
    }

    renderRows = () => {
        return _.map(this.props.workflows, workflow => (
            <tr key={workflow.id}>
                <td>{workflow.name}</td>
                {/*<td><Link to={`/issues/${issue.id}`}>{issue.title}</Link></td>*/}
            </tr>
        ))
    }
}

WorkflowsTable.propTypes = {
    workflows: PropTypes.object.isRequired
};

export default WorkflowsTable;