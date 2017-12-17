import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import {
    Table
} from 'react-bootstrap';

export default class IssuesTable extends React.Component {
    render() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {this.renderRows()}
                </tbody>
            </Table>
        );
    }

    renderRows = () => {
        return _.map(this.props.issues, issue => {
            return (
                <tr key={issue.id}>
                    <td>
                        <Link to={`/issues/${issue.id}`}>
                            {issue.title}
                        </Link>
                    </td>
                </tr>
            );
        });
    }
}

IssuesTable.propTypes = {
    issues: PropTypes.object.isRequired
};

