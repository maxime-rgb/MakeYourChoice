import {Container, Nav, NavDropdown} from 'react-bootstrap';
import Navbar  from 'react-bootstrap/Navbar'
import '../css/Navbar.css';
import { Link } from "react-router-dom";


function Header(){

    return(
        <>
          <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Surveys" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">My Surveys</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Link to="/PostForm" style={{textDecoration:'none'}}>
                PostForm
              </Link>
                </NavDropdown>
              </Nav>
              <Nav>
                <img className="logo" src="/images/logo-mys-white-removebg.png"/>
              </Nav>
              <Nav>
              <Link className="navbarA" to="/" >
                Home
              </Link>

              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
      </>
    );
}

export default Header;
