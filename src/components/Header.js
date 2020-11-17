import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
export default props => (
  <header>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">HurtigHans.dk</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <b class="text-light">Home</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
          <b class="text-light">About Us</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
          <b class="text-light">Contact Us</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
