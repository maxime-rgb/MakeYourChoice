import {Container, Nav, NavDropdown} from 'react-bootstrap';
import Navbar  from 'react-bootstrap/Navbar'
import '../css/Navbar.css';



function Header(){

    return(
        <>
            <Card className="text-center">
            <Card.Header>Make Your Choice</Card.Header>
            <Card.Body>
                <Card.Title>Maxime THOMAS</Card.Title>
                <Card.Text>
                    Contact : 06-50-62-71-22 / Maximethomas404@gmail.com
                </Card.Text>
            </Card.Body>
            </Card>
      </>
    );
}

export default Header;
