import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Hash } from "react-bootstrap-icons";
function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} href="/">
          MyPortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} smooth="true" to="/#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} smooth="true" to="/#about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} smooth="true" to="/#projects">
              Projects
            </Nav.Link>
            <Nav.Link as={HashLink} smooth="true" to="/#connect">
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
