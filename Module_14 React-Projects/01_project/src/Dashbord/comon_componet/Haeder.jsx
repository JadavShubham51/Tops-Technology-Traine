import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function Haeder() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  className="bg-dark">
        <Container>
          <Navbar.Brand to="/Dashboard" as={NavLink} className="text-white">DashBoard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="bg-white" />
          <Navbar.Collapse id="responsive-navbar-nav"  className="text-white">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/Adddata"  className="text-white">Add-data</Nav.Link>

              <Nav.Link as={NavLink} to="/View"  className="text-white">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/signin"  className="text-white">Signin</Nav.Link>
              <Nav.Link as={NavLink} eventKey={2}  className="text-white" to="/signup">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Haeder
