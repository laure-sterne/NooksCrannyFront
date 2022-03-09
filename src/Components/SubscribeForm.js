import React, { Component } from "react";
import { Form, Button, Row, InputGroup, Col } from "react-bootstrap";

//formulaire pour s'inscrire 
class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Vous n'avez pas de compte ? Inscrivez-vous !</h3>
        <Form /*noValidate validated={validated} onSubmit={handleSubmit}*/>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Pseudo</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Méli"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Entrez un pseudo
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control type="email" placeholder="melinook@tominc.ac" />
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
            Créer mon compte
          </Button>
        </Form>
      </div>
    );
  }
}

export default SubscribeForm;
