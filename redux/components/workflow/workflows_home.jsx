import React from 'react';
import {connect} from 'react-redux';

import { LinkContainer } from 'react-router-bootstrap';
import { Button, Panel } from 'react-bootstrap';

import { fetchWorkflows } from '../../actions/actions_workflows'

import WorkflowsTable from "./workflows_table.jsx";

class WorkflowsHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {loading: true};
    }

    componentDidMount() {
        this.props.fetchWorkflows( () => this.setState({loading: false}));
    }

    render() {
        if(this.state.loading){
            return (
                <h3>Loading ....<i className="fa fa-spinner fa-spin"></i></h3>
            );
        }

        return (
            <Panel header={this.renderPanelHeader()}>
                <WorkflowsTable workflows={this.props.workflows} />
            </Panel>
        );
    }

    renderPanelHeader = () => {
        return (
            <div className="clearfix">
                <div className="pull-left">Workflows</div>
                <div className="pull-right">
                    <LinkContainer to="/workflows/new">
                        <Button>New <i className="fa fa-plus-circle"></i></Button>
                    </LinkContainer>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {workflows: state.workflows};
}

export default connect(mapStateToProps, { fetchWorkflows })(WorkflowsHome);