import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return(
            <Navbar color="faded" light>
                <NavbarBrand href="/"><img src="logo.png" alt="odeic logo" id="logo"></img></NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2" />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/about" activeClassName="activeLink">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/" activeClassName="activeLink">Fill</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}