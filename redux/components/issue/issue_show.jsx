import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { Panel } from 'react-bootstrap';

import { fetchIssue, updateIssueField } from '../../actions/actions_issues';
import IssueForm from './issue_form.jsx';

class IssueShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchIssue(id);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    updateField = (fieldName, updatedValue) => {
        const { issue } = this.props;
        if(_.toString(issue[fieldName]) != _.toString(updatedValue)){
            let changeset = {};
            changeset[fieldName] = updatedValue;
            this.props.updateIssueField(issue.id, changeset);
        }
    }

    handleBlur = (event, newValue, prevValue) => {
        this.updateField(event.target.name, newValue);
    }

    handleRichTextBlur = (event, targetName, newValue) => {
        this.updateField(targetName, newValue);
    }

    render() {
        const { issue }  = this.props;

        if(_.isEmpty(issue)){
            return (
                <h3>Loading ....<i className="fa fa-spinner fa-spin"></i></h3>
            );
        }

        return (
            <Panel>
                <IssueForm
                    initialValues={this.props.issue}
                    submittable={false}
                    handleBlur={this.handleBlur}
                    handleRichTextBlur={this.handleRichTextBlur}
                    onSubmit={this.handleSubmit}
                />
            </Panel>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {issue: state.issues[parseInt(ownProps.match.params.id)]}
}

export default connect(mapStateToProps, { fetchIssue, updateIssueField })(IssueShow);
