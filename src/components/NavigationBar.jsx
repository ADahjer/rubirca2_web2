import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className='p-1'>
        <Navbar.Brand href="/">Manillitas</Navbar.Brand>
        <Nav className="me-0">
          <Nav.Link href="/">Asmith Dahjer Rebolledo</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;