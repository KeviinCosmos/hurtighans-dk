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
                
                    <Link to="/" className="nav-link" role="button">Home</Link>
                
                
                    <Link to="/about" className="nav-link" role="button">About</Link>
                
                
                    <Link to="/contact" className="nav-link" role="button">Contact</Link>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)