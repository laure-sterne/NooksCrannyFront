import react, { Component } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <Navbar className="customNavbar" fixed="top">
            <Container fluid>
              <NavLink className="nav-link" to="/"><Navbar.Brand href="#"> <img
                // alt="Logo de notre site en forme de feuille sur Animal Crossing"
                src="../images/tomNookLogoV2.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
                Nook's Cranny</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <NavLink className="nav-link" to="/products">Tous nos produits</NavLink>
                  <NavLink className="nav-link" to="/login">Se connecter</NavLink>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Chaise jaune"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Rechercher</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Header;
