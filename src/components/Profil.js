import Header from './Header';
import {Container, Nav, NavDropdown, Form, Row, Col} from 'react-bootstrap';
import Navbar  from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";




function Profil(){

    return(
        <>
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            </Form>
      </>
    );
}

export default Profil;