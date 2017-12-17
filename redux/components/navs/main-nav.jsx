import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
    FormGroup,
    FormControl,
    MenuItem,
    Nav,
    Navbar,
    NavDropdown,
    NavItem
} from 'react-bootstrap';

import { fetchProjects } from "../../actions/actions_projects";

class MainNav extends React.Component {
    static defaultProps = {
        projects: null
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        if(this.props.projects === null){
            return (
                <h3>Loading ....<i className="fa fa-spinner fa-spin"></i></h3>
            );
        }

        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Beera</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    { this.renderProjects(3) }
                    <NavItem href="/logout">logout</NavItem>
                </Nav>
                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search"/>
                    </FormGroup>
                </Navbar.Form>
            </Navbar>
        );
    }

    renderProjects = (parentEventKey) => {
        let eventSubKey = 0;

        const projects = _.map(this.props.projects, project => {
            ++eventSubKey;

            return (
                <MenuItem key={project.id} eventKey={parentEventKey + (eventSubKey/10)}>
                    { project.name }
                </MenuItem>
            );
        });

        return (
            <NavDropdown eventKey={3} title="Projects" id="projects-nav-dropdown">
                {projects}
            </NavDropdown>
        );
    }
}

function mapStateToProps(state) {
    return {projects: state.projects};
}

export default connect(mapStateToProps, { fetchProjects })(MainNav);