import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Menu({ mobileMenuIsOpen }) {
    useEffect(() => {
        console.log(mobileMenuIsOpen)
    }, [mobileMenuIsOpen]);

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top">
            {/* Menu sur PC */}
            <Nav className="mr-auto d-none d-lg-block">
                <NavLink activeClassname='active' className='App__nav-link' to="/portfolio">Portfolio</NavLink>
                <NavLink activeClassname='active' className='App__nav-link' to="/about">A propos</NavLink>
            </Nav>

            {/* Menu Tablette & Mobile */}
            <Nav className={"App__mobile_menu mr-auto d-block d-lg-none " + (mobileMenuIsOpen === false ? 'transform-x-100vw' : '')}>

                <NavLink activeClassname='active' className='App__nav-link' to="/portfolio">Portfolio</NavLink>
                <NavLink activeClassname='active' className='App__nav-link' to="/about">A propos</NavLink>
            </Nav>
        </Navbar>
    )
}
