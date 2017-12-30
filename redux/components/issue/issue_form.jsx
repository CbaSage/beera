import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

import {
    Button,
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock
} from 'react-bootstrap';

import { ReduxInputFormGroup, ReduxSelectFormGroup, ReduxRichTextEditorFormGroup } from '../form/redux_form_group.jsx';
import { fetchProjects } from "../../actions/actions_projects";

class IssueForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: null,
        };
    }

    render() {
        const { handleSubmit, pristine, rest, submitting, handleBlur, handleRichTextBlur} = this.props;

        if(_.isEmpty(this.props.projects)){
            return (
                <h3>Loading ....<i className="fa fa-spinner fa-spin"></i></h3>
            );
        }

        return (
            <form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <Field
                        name="project_id"
                        label="Project"
                        type="select"
                        options={this.renderProjectOptions()}
                        component={ReduxSelectFormGroup}
                        onBlur={handleBlur}
                    />
                    <Field
                        name="title"
                        label="Title"
                        component={ReduxInputFormGroup}
                        type="text"
                        onBlur={handleBlur}
                    />
                    <Field
                        name="story_points"
                        label="Story Points"
                        component={ReduxInputFormGroup}
                        type="number"
                        onBlur={handleBlur}
                    />
                    <Field
                        name="description"
                        label="Description"
                        component={ReduxRichTextEditorFormGroup}
                        type="text"
                        onBlur={handleRichTextBlur}
                    />
                    {/*<Field*/}
                        {/*name="title"*/}
                        {/*label="Title"*/}
                        {/*component={ReduxInputFormGroup}*/}
                        {/*type="text"*/}
                    {/*/>*/}
                    {/*<Field*/}
                        {/*name="description"*/}
                        {/*label="Description"*/}
                        {/*component={ReduxFormGroup}*/}
                        {/*type="textarea"*/}
                    {/*/>*/}
                    {this.renderSubmitButton()}
            </form>
        );
    }

    renderProjectOptions = () => {
        return _.map(this.props.projects, project => (
            <option value={project.id} key={project.id}>
                {project.name}
            </option>
        ));
    }

    renderSubmitButton = () => {
        if(!this.props.submittable) {
            return '';
        }

        return (
            <Button bsStyle="primary" type="submit">{this.props.submitText || 'Submit'}</Button>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.project_id) {
        errors.project_id = 'You must specify a Project'
    }

    if (!values.title) {
        errors.title = 'Required'
    }

    return errors;
}

const ValidatedForm = reduxForm({
    form: 'issue-form',
    validate
})(IssueForm);


ValidatedForm.propTypes = {
    onBlur: PropTypes.func,
    submittable: PropTypes.bool
};

ValidatedForm.defaultProps = {
    onBlur: () => {},
    submittable: true
};

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}


export default connect(mapStateToProps, { fetchProjects })(ValidatedForm);