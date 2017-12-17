import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
    ControlLabel,
    FormControl,
    FormGroup,
} from 'react-bootstrap';


class ProjectForm extends React.Component {
    render() {
        const { handleSubmit, pristine, rest, submitting} = this.props;

        return (
            <form>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <Field
                        name="name"
                        component={FormControl}
                        type="text"
                        placeholder="First Name"
                    ></Field>
                </FormGroup>
            </form>
        );
    }
}

export default reduxForm({
    form: 'project-form'
})(ProjectForm);