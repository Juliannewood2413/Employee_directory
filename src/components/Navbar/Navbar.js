import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarComp() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
    
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavbarComp;
