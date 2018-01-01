import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Link } from 'react-router-dom';

import { Table } from 'react-bootstrap';

class WorkflowStatusesTable extends React.Component {
    render() {
        return (
            <Table bordered striped>
                <thead>
                <tr>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>
        )
    }

    renderRows = () => {
        return _.map(this.props.workflowStatuses, workflowStatus => (
            <tr key={workflowStatus.id}>
                <td>{workflowStatus.name}</td>
                {/*<td><Link to={`/issues/${issue.id}`}>{issue.title}</Link></td>*/}
            </tr>
        ))
    }
}

WorkflowStatusesTable.propTypes = {
    workflowStatuses: PropTypes.object.isRequired
};

export default WorkflowStatusesTable;