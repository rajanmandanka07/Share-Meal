import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import logo from './logo.jpeg';

function MainNavbar() {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className=" ">
      <Navbar.Brand as={Link} to="/homepage" className="mr-auto pl-5">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top mx-3"
          alt="Logo"
        />
        ShareMeal
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="active ml-9 mr-5">Home</Nav.Link> 
          <Nav.Link as={Link} to="/about">About Us</Nav.Link> 
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;