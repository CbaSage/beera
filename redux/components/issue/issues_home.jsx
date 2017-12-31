import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { fetchIssues } from '../../actions/actions_issues.js'

import IssuesTable from './issues_table.jsx';

class IssuesHome extends React.Component {
    componentDidMount() {
        this.props.fetchIssues();
    }

    render() {
        if(_.isEmpty(this.props.issues)){
            return (
                <h3>Loading ....<i className="fa fa-spinner fa-spin"></i></h3>
            );
        }

        return (
                <IssuesTable issues={_.toArray(this.props.issues)} />
        );
    }
}

function mapStateToProps(state) {
    return {issues: state.issues};
}

export default connect(mapStateToProps, { fetchIssues })(IssuesHome);