import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';

const MyNavbar = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  console.log(token?jwtDecode(token).role:'no token');
  const role= token?jwtDecode(token).role:'no token';
  

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-logo">
        <img
          src="/logo sirine.png"
          alt="Sirine Logo"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto main-nav">
          <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>
            Shop
          </Nav.Link>
          <Nav.Link hidden={role!=='admin'&&role!=='user'} as={Link} to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
            Cart
          </Nav.Link>
        </Nav>
        
        {/* <Form inline className="search-form">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form> */}
        
        <Nav className="auth-nav">
          <Nav.Link as={Link} to={token ? 'Profile' : 'login'} className={location.pathname === '/profile' ? 'active' : ''}>
            <Button variant="outline-primary" className="profile-btn">
              <FaUser className="profile-icon" /> {token ? 'Profile' : 'Login'}
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/get-started">
            <Button variant="primary" className="get-started-btn">
              Get Started
            </Button>
          </Nav.Link>
          <Nav.Link hidden={!token?true:role==='user'} as={Link} to="/Dashboard/Overview">
            <Button hidden={!token?true:role==='user'} variant="primary" className="get-started-btn">
              Admin-Dashboard
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;