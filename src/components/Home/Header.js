<<<<<<< HEAD
import React from "react";
import Footer from "./Footer.js";
// import Header from './Header.js'
import Login from "../registration/Login";
import Signup from "../registration/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="Home">
      <div class="header1">
        <Navbar variant="dark" className="Nav">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Signup">Sign up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
=======
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Map from './map.png'



function Header() {
  return (

  
  <>
   <Navbar bg="none" expand="lg" >
      <Container className="nav1" >
        <Navbar.Brand href="#home"><img alt="logo" src={Map} width="30px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto" >
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/categories">Catagories </Nav.Link>
            <Nav.Link  href="/signup"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg></Nav.Link>
            <Nav.Link href="/login">< svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
  </>
  );
}

export default Header
>>>>>>> 27de8c1e797d25708f12e184cab22d24908bc4c6
