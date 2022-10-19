import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
{' '}
        Pc Part Picker
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarComp