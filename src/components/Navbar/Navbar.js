import React from "react";
import { Nav, Navbar, Button, Form, FormControl, DropdownButton, Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarComp(props) {

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="nav">
    <Navbar.Brand href="#home" className="NavTitle">Employee Directory</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <DropdownButton id="dropdown-basic-button" title="Filter by:" variant="info">
        <Dropdown.Item href="#/action-1" onClick={props.handleAlphabetical}>Alphabetical</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={props.handleByAge}>Age</Dropdown.Item>
      </DropdownButton> 
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search by Name:" className="search-form" onChange={props.searchFunction} />
        <Button variant="outline-info" className="searchBtn">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavbarComp;
