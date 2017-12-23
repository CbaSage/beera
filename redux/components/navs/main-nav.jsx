import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Button,
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
                        <Link to="/">
                            Beera
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    { this.renderProjects(3) }
                    <NavItem href="/logout">logout</NavItem>
                </Nav>
                <Nav>
                    <LinkContainer to="/issues/new">
                        <NavItem>
                            New Issue
                        </NavItem>
                    </LinkContainer>
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
        let eventSubKey = 1;

        const projects = _.map(this.props.projects, project => {
            ++eventSubKey;

            return (
                <MenuItem key={project.id} eventKey={parentEventKey + (eventSubKey/10)}>
                    { project.name }
                </MenuItem>
            );
        });

        return (
            <NavDropdown eventKey={parentEventKey} title="Projects" id="projects-nav-dropdown">
                <LinkContainer to="/projects/new">

                <MenuItem key={-1} eventKey={parentEventKey + .1}>
                    New Project
                    </MenuItem>
                </LinkContainer>
                {projects}
            </NavDropdown>
        );
    }
}

function mapStateToProps(state) {
    return {projects: state.projects};
}

export default connect(mapStateToProps, { fetchProjects })(MainNav);