import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'
import Login from '../registration/Login'
import Signup from '../registration/Signup'





import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar} from 'react-bootstrap';

function Header() {

  return (
    <div className="Home">
        <div class="header1">
        
      <Navbar  variant="dark" className="Nav">
           
        <Container >
          
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">Sign up</Nav.Link>
         




       
            
          </Nav>
        </Container>

      </Navbar>

        
    </div>

    </div>
  )
}

export default Header