import {Container, Button, Nav, NavDropdown} from 'react-bootstrap';
import Navbar  from 'react-bootstrap/Navbar'
import '../css/Navbar.css';
import { Link } from "react-router-dom";
import React from 'react';


function Header(props){
console.log(props);
  let user = JSON.parse(props.User)
  console.log(user);

  function Redirection(){
    document.location.href="/";
  }

  function logout(){
    sessionStorage.setItem('user', null)
    props.setUser(sessionStorage.getItem('user'))
    Redirection();
  }
    return(
        <>
          <Navbar collapseOnSelect expand="lg">
            <Container >
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="container2">
            
              <Nav>
              <Link className="navbarHomeText " to="/" >
               <img className="logo" src="\images\MYC_white.png"/>
              </Link>
              </Nav>
              
                {(props.User !== 'null') && (props.User !== null) ? <div className="userConnected"><h2 className="userConnectedName">{user.FirstName}</h2><Button className="disconnect" onClick={()=>logout()}><img className="exitDoor" src="../images/exit-door.svg" /></Button>
                </div> : '' }

                {(props.User !== 'null') && (props.User !== null) ? 
                
                <Nav className="me-auto">
                  <NavDropdown title="Options" id="collasible-nav-dropdown">
                      <Link className="navbarA" to="/Profil" >
                        My Profil
                      </Link>
                    <NavDropdown.Divider />
                        <Link className="navbarA " to="/Surveys" style={{textDecoration:'none'}}>
                          My Surveys
                        </Link>
                    <NavDropdown.Divider />
                        <Link className="navbarA " to="/PostForm" style={{textDecoration:'none'}}>
                          New Survey
                        </Link>
                        <NavDropdown.Divider />
                        <Link className="navbarA " to="./contact" style={{textDecoration:'none'}}>
                          Contact us
                        </Link>
                  </NavDropdown>  
              </Nav>: <Link className="Loginbtn" to="/SignUp" >
                  Login </Link>  }

            </Navbar.Collapse>
            
            </Container>
            
          </Navbar>
          
      </>
    );
}

export default Header;
