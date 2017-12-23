import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
    Button,
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock
} from 'react-bootstrap';

import ReduxFormGroup from '../form/redux_form_group.jsx';

import { addAlert} from "../../actions/actions_alerts";

class IssueForm extends React.Component {

    render() {
        const { handleSubmit, pristine, rest, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <Field
                        name="title"
                        label="Title"
                        component={ReduxFormGroup}
                        type="text"
                    />

                    {/*<Field*/}
                        {/*name="description"*/}
                        {/*label="Description"*/}
                        {/*component={ReduxFormGroup}*/}
                        {/*type="textarea"*/}
                    {/*/>*/}
                <Button bsStyle="primary" type="submit">Submit</Button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    // if (!values.name) {
    //     errors.name = 'Required'
    // } else if (values.name.length > 40) {
    //     errors.name = 'Must be 40 characters or less'
    // }
    //
    // if (!values.abbreviation) {
    //     errors.abbreviation = 'Required'
    // } else if (values.abbreviation.length > 5) {
    //     errors.abbreviation = 'Must be 5 characters or less'
    // }

    return errors;
}

export default reduxForm({
    form: 'issue-form',
    validate
})(IssueForm);