import React from 'react';
import { Container, FormControl, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping cart</Link>
        </Navbar.Brand>

        <Nav className='d-flex align-items-center'>
          <Navbar.Text className='search m-1'>
            <FormControl
              style={{ width: 350 }}
              placeholder='search'
            />
          </Navbar.Text>

          <Dropdown className='m-2'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="danger">5</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}> bro Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
