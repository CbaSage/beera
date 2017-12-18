import React from 'react';

import {
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock
} from 'react-bootstrap';

export default function ReduxFormGroup({ input, label, type, meta}) {
    return (
        <FormGroup validationState={meta.error && meta.touched ? 'error' : null}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...input} placeholder={label} type={type}/>
            <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
        </FormGroup>
    );
}