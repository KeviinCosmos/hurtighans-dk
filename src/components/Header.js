import React from 'react'
import headerStyles from '../styles/HeaderStyle.module.css'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'gatsby'


export default (props) => (
    <header >
        <Navbar expand="lg" fixed="top" className={headerStyles.navbarStyle}>
            <Navbar.Brand href="/">Hurtighans.dk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)