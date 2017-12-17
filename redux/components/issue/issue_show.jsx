import React from 'react';
import { connect } from 'react-redux';

import { fetchIssue } from "../../actions/actions_issues.js";

class IssueShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchIssue(id);
    }

    render() {
        const { issue }  = this.props;

        if(_.isEmpty(issue)){
            return (
                <h3>Loading ....<i className="fa fa-spinner fa-spin"></i></h3>
            );
        }

        return (
            <h3>{issue.title}</h3>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {issue: state.issues[parseInt(ownProps.match.params.id)]}
}

export default connect(mapStateToProps, { fetchIssue })(IssueShow);
