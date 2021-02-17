import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarComp(props) {

  function handleByAge(event) {
    event.preventDefault();
    alert('This button was clicked')
    // const unFiltered = this.state.searchResults;
    // const filteredAge = unFiltered.sort(function (a,b) {
    //   return b.dob.age - a.dob.age;
    // })
    // this.setState({
    //   searchResults: filteredAge
    // })
  }

  function handleByGender(event) {
    event.preventDefault();
    alert('this button was clicked')
  }


  return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Button className="ageBtn" onClick={handleByAge} variant="outline-info" >By Age</Button>
      <Button className="genderBtn" onClick ={handleByGender}variant="outline-info" >By Gender</Button>
    
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="search-form" />
        <Button variant="outline-info" className="searchBtn" onClick={props.handleInputChange}>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavbarComp;
