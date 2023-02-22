import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown, Container, Image } from "react-bootstrap";
import Logo from "../img/logo.svg";

export default function Header() {
  return (
    <Navbar variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image src={Logo} fluid width="100" height="40" className="fluid" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link>Sign in</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/archive">
              <Nav.Link>Archives</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/daily">
              <Nav.Link>Current Day</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
