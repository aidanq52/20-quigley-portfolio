import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function PortfolioNavbar(){
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Quigley Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Applications" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://the-ultimate-fitness-tracker.herokuapp.com/?id=5f334a2059852a0017420622">Fitness Tracker</NavDropdown.Item>
                <NavDropdown.Item href="https://sleepy-dawn-56235.herokuapp.com/">Note Taker</NavDropdown.Item>
                <NavDropdown.Item href="https://cryptic-badlands-37708.herokuapp.com/">Budget Tracker</NavDropdown.Item>
                <NavDropdown.Item href="https://uw-project-2.herokuapp.com/">ChefPro</NavDropdown.Item>
                <NavDropdown.Item href="https://saharanath.github.io/Project1/">Gaea Hiking</NavDropdown.Item>
                <NavDropdown.Item href="https://pure-plateau-15598.herokuapp.com/">Employee Directory</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default PortfolioNavbar;