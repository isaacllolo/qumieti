
import { Navbar,Container,  Button ,Form, Nav } from "react-bootstrap";
import React from 'react';
import '../styles/NavBar.scss';
const NavBar = () => {
    return(
<Navbar expand="lg" className=" mx-auto navbar ">
      <Container className="navbar"fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 navbar-dark"
            navbarScroll
          >
            <Nav.Link href="#action1 ">Temario</Nav.Link>
            <Nav.Link href="#action2">Simulacion</Nav.Link>
            <Nav.Link href="#" >
              Logros
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
} 
export default NavBar;