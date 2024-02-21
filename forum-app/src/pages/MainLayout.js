import { Outlet, Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar expand='lg' className='bg-body-tertiary'>
          <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/profile'>My Profile</Nav.Link>
                <Nav.Link href='/forum'>Forum</Nav.Link>
                <Nav.Link href='/messages'>Messages</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href='/login'>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className='mt-5'>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
