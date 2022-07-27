import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./knowledge_hub_logo.png";


function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt=" logo" style={{ hight: 200, width: 200 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className ='nav'>
              <Nav.Link className="nav-item"
                href="/"
                style={{ color: "#545454", fontWeight: "bold" }}
              >
                Home
              </Nav.Link>
              <Nav.Link className="nav-item"
                href="/categories"
                style={{ color: "#545454", fontWeight: "bold" }}
              >
                Categories
              </Nav.Link>
              <Nav.Link className="nav-item"
                href="/BookMark"
                style={{ color: "#545454", fontWeight: "bold" }}
              >
                Bookmark
              </Nav.Link>
              <Nav.Link className="nav-item"
                href="/PArticles"
                style={{ color: "#545454", fontWeight: "bold" }}
              >
                My Articles
              </Nav.Link>
              <Nav.Link className="nav-item"
                href="/signup"
                style={{ color: "#545454", fontWeight: "bold" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  classNameName="bi bi-person-plus-fill"
                  viewBox="0 0 20 20"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </Nav.Link>
              <Nav.Link className="nav-item"
               href="/logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  classNameName="bi bi-box-arrow-in-right"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
