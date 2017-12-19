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

class ProjectForm extends React.Component {
    render() {
        const { handleSubmit, pristine, rest, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <Field
                        name="name"
                        label="Name"
                        component={ReduxFormGroup}
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
})(ProjectForm);