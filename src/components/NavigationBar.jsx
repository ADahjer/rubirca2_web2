import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className='p-1'>
        <Link to={'/'} className='navbar-brand'>Manillitas</Link>
        <Nav className="me-0">
          <Link to={'/'} className='nav-link'>Asmith Dahjer Rebolledo</Link>
          <Link to={'checkout'} className='nav-link'><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;