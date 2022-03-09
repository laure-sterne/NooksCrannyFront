import React, { Component } from "react";
import { Form, Button, Row, InputGroup, Col } from "react-bootstrap";

//Formulaire pour se connecter à un compte
class FormLog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Connectez-vous !</h3>
        <Form>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control type="email" placeholder="tomnook@tominc.ac" />
              <Form.Text className="text-muted">
                Tom Nook garde les informations comme ces clochettes. En sécurité
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Me connecter
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormLog;