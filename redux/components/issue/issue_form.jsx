import React from 'react';
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

import RichTextEditor from '../form/editor/rich-text-editor.jsx';
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
        const { handleSubmit, pristine, rest, submitting} = this.props;

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
                    />
                    <Field
                        name="title"
                        label="Title"
                        component={ReduxInputFormGroup}
                        type="text"
                    />

                    <Field
                        name="description"
                        label="Description"
                        component={ReduxRichTextEditorFormGroup}
                        type="text"
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
                <Button bsStyle="primary" type="submit">{this.props.submitText || 'Submit'}</Button>
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


function mapStateToProps(state) {
    return {projects: state.projects};
}

export default connect(mapStateToProps, { fetchProjects })(ValidatedForm);