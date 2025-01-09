import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { urls } from '@/shared/urls';
import logo from '@/assets/media/img/Logo.png'

const Header = () => {
  return (
    <header>
      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={urls.HOME} className='logo'>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" my-nav-item mx-5">
            <Nav.Link as={NavLink} to={urls.HOME}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={urls.ABOUT}>
                About us
              </Nav.Link>
              <Nav.Link as={NavLink} to={urls.SERVICES}>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to={urls.PRICING}>
                Pricing
              </Nav.Link>
              <Nav.Link as={NavLink} to={urls.BLOG}>
                Blog
              </Nav.Link>
            </Nav>
            <div className="d-flex justify-content-end ">
              <button className='my-btn '>Requeste a quote</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
