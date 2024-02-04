import { Navbar, Container, Button, Form, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/NavBar.scss';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {headersData} from './configs'
const backendUrl = process.env.VITE_APP_URI;

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigate = useNavigate();
const [userName, setUserName] = useState('');
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
// ...

useEffect(() => {
  const fetchUserName = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/getuser`,{},
        headersData
      );

      const responseData = response.data;
        setUserName(responseData.usuario);
      
    } catch (error) {
      console.error('Error al verificar el token:', error);
    }
  };

  fetchUserName();
}, []);

// ...

  const handleLogout = async () => {
    try {
    
     
      
     
      const response = await axios.get(`${backendUrl}/logout`);

      const responseData = response.data;
  
      if (responseData && responseData.status === 'success') {
        console.log('Cerrar sesión');
        // Elimina la cookie del lado del cliente
        
        Cookies.remove('token');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  

  return (
    
    <Navbar expand="lg" className="">
      <Container className="navbar" >
        <NavDropdown
        
            title={`Hola, ${userName}`}
            id="basic-nav-dropdown"
            show={isDropdownOpen}
            onClick={handleDropdownToggle}
          >
            <NavDropdown.Item onClick={handleLogout}>Cerrar Sesión</NavDropdown.Item>
          </NavDropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto" navbarScroll>
            <Nav.Link as={NavLink} to="/" activeClassName="active">Temario</Nav.Link>
            <Nav.Link as={NavLink} to="/simulador" activeClassName="active">Simulacion</Nav.Link>
            <Nav.Link  as={NavLink} to="/logros" activeClassName="active">Logros</Nav.Link>
          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
