import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { Button } from "react-bootstrap";

export function Header({ username, onLogout, isLoggedIn }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            style={{ width: "50px" }}
            alt="logo"
          />
          Ekart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Button variant="outline-light" onClick={onLogout}>
                Logout
              </Button>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
