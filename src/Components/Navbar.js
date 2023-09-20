import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import kknlogo from '../images/kknlogo.png'

const NavBar = () => {
  return (
    <Navbar className='navbar' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={kknlogo}
            alt="Logo"
            width="190"
            height="85"
            className="d-inline-block align-top logoimg"
          />{' '}
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className=" navlist">
            <Nav.Link href="/"  className='navcolor'>Ebook</Nav.Link>
            <Nav.Link href="/about"  className='navcolor'>Study Packages</Nav.Link>
            <Nav.Link href="/services"  className='navcolor'>Test Prep</Nav.Link>
            <Nav.Link href="/contact"  className='navcolor'>Video</Nav.Link>
            <Nav.Link href="/contact"  className='navcolor'>Combo</Nav.Link>
            <Nav.Link href="/contact"  className='navcolor'>Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
