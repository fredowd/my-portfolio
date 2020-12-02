import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink activeClassname='active' className='App__nav-link' to="/portfolio">Portfolio</NavLink>
                    <NavLink activeClassname='active' className='App__nav-link' to="/about">A propos</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
