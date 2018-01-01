import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
    Button
} from 'react-bootstrap';

import { ReduxInputFormGroup } from '../form/redux_form_group.jsx';

class WorkflowForm extends React.Component {
    render() {
        const { handleSubmit, pristine, rest, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <Field
                        name="name"
                        label="Name"
                        component={ReduxInputFormGroup}
                        type="text"
                    />

                <Button bsStyle="primary" type="submit">Submit</Button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 40) {
        errors.name = 'Must be 40 characters or less'
    }

    return errors;
}

export default reduxForm({
    form: 'project-form',
    validate
})(WorkflowForm);