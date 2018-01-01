import React from 'react';
import {connect} from 'react-redux';

import { LinkContainer } from 'react-router-bootstrap';
import { Button, Panel } from 'react-bootstrap';

import { fetchWorkflowStatuses } from '../../actions/actions_workflow_statuses';

import WorkflowStatusesTable from "./workflow_statuses_table.jsx";

class WorkflowStatusesHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {loading: true};
    }

    componentDidMount() {
        this.props.fetchWorkflowStatuses(() => this.setState({loading: false}));
    }

    render() {
        if(this.state.loading){
            return (
                <h3>Loading ....<i className="fa fa-spinner fa-spin"></i></h3>
            );
        }

        return (
            <Panel header={this.renderPanelHeader()}>
                <WorkflowStatusesTable workflowStatuses={this.props.workflowStatuses} />
            </Panel>
        );
    }

    renderPanelHeader = () => {
        return (
            <div className="clearfix">
                <div className="pull-left">Workflow Statuses</div>
                <div className="pull-right">
                    <LinkContainer to="/workflow-statuses/new">
                        <Button>New <i className="fa fa-plus-circle"></i></Button>
                    </LinkContainer>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {workflowStatuses: state.workflowStatuses};
}

export default connect(mapStateToProps, { fetchWorkflowStatuses })(WorkflowStatusesHome);