import React from 'react';
import {convertFromRaw, convertToRaw} from 'draft-js';

import {
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock
} from 'react-bootstrap';

import RichTextEditor from './editor/rich-text-editor.jsx';

export function ReduxInputFormGroup({ input, label, type, meta}) {
    return (
        <FormGroup validationState={meta.error && meta.touched ? 'error' : null}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...input} placeholder={label} type={type}/>
            <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
        </FormGroup>
    );
}

export class ReduxRichTextEditorFormGroup extends React.Component {
    handleChange = (editorState) => {
        this.props.input.onChange(JSON.stringify(editorState));
    }

    render() {
        let { label, meta} = this.props;

        return (
            <FormGroup validationState={meta.error && meta.touched ? 'error' : null}>
                <ControlLabel>{label}</ControlLabel>
                <RichTextEditor handleChange={this.handleChange} placeholder={label}/>
                <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
            </FormGroup>
        );
    }
}

export function ReduxSelectFormGroup({ input, label, meta, options}) {
    return (
        <FormGroup validationState={meta.error && meta.touched ? 'error' : null}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl componentClass="select" {...input} default="">
                <option value="" disabled>{label}</option>
                {options}
            </FormControl>
            <HelpBlock>{meta.touched ? meta.error : ''}</HelpBlock>
        </FormGroup>
    );
}