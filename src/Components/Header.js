import react, { Component } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <header>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">Nook's cranny</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#features">Se connecter</Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
              </Nav>
            </Container>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Header;