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


class ProjectForm extends React.Component {
    onSubmit = (values) => {
        console.log(values);
    }

    render() {
        const { handleSubmit, pristine, rest, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <Field
                        name="name"
                        component={ReduxFormGroup}
                        type="text"
                    />
                </FormGroup>

                <Button bsStyle="primary" type="submit">Submit</Button>
            </form>
        );
    }

    renderField = ({ input, label, type, meta}) => (
        <FormGroup validationState={meta.error && meta.touched ? 'error' : null}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...input} placeholder={label} type={type}/>
            <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
        </FormGroup>
    )
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