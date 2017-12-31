import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Link } from 'react-router-dom';

import { Table } from 'react-bootstrap';

class IssueTable extends React.Component {
    render() {
        return (
            <Table bordered striped>
                <thead>
                <tr>
                    <th>Project</th>
                    <th>Title</th>
                    <th>Story Points</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>
        )
    }

    renderRows = () => {
        return _.map(this.props.issues, issue => (
            <tr key={issue.id}>
                <td>{issue.project.name}</td>
                <td><Link to={`/issues/${issue.id}`}>{issue.title}</Link></td>
                <td>{issue.story_points}</td>
            </tr>
        ))
    }
}

IssueTable.propTypes = {
    issues: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default IssueTable;