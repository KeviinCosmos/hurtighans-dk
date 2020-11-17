import React from 'react'
import headerStyles from '../styles/Header.module.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'gatsby'


export default (props) => (
    <header className={headerStyles.navbarWrapper}>
        <Navbar bg="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">Hurtighans.dk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link >
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link >
                    <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link >
                    <Link to="/contact">Contact</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)