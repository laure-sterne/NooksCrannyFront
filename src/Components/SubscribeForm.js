import React, { Component } from "react";
import { Form, Button, Row, InputGroup, Col } from "react-bootstrap";

//formulaire pour s'inscrire 
class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail : "",
      mdp : "",
      pseudo : ""
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit = (event) => {
    console.log(this.state);
    console.log("coucou")
        fetch('http://localhost:4000/createuser', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}

handleChange = (event) => {
  this.setState({[event.target.name]:event.target.value});
}

render(){
  return (
  <form onSubmit={this.handleSubmit}>

      <label>
        Mail:
        <input name="mail" placeholder="Mail" value={this.state.mail}  onChange={this.handleChange} />
        Mot de passe
        <input name="mdp" placeholder="Mdp" value={this.state.mdp}  onChange={this.handleChange} />
        Pseudo
        <input name="pseudo" placeholder="Pseudo" value={this.state.pseudo}  onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}
}

  // render() {
  //   return (
  //     <div>
  //       <h3>Vous n'avez pas de compte ? Inscrivez-vous !</h3>
  //       <Form /*noValidate validated={validated} onSubmit={handleSubmit}*/>
  //         <Row className="mb-3">
  //           <Form.Group as={Col} md="4" controlId="validationCustomUsername">
  //             <Form.Label>Pseudo</Form.Label>
  //             <InputGroup hasValidation>
  //               <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
  //               <Form.Control
  //                 type="text"
  //                 placeholder="Méli"
  //                 aria-describedby="inputGroupPrepend"
  //                 required
  //               />
  //               <Form.Control.Feedback type="invalid">
  //                 Entrez un pseudo
  //               </Form.Control.Feedback>
  //             </InputGroup>
  //           </Form.Group>

  //           <Form.Group className="mb-3" controlId="formBasicEmail">
  //             <Form.Label>Adresse e-mail</Form.Label>
  //             <Form.Control type="email" placeholder="melinook@tominc.ac" />
  //             <Form.Text className="text-muted">
  //             Tom Nook garde les informations comme ces clochettes. En sécurité
  //             </Form.Text>
  //           </Form.Group>

  //           <Form.Group className="mb-3" controlId="formBasicPassword">
  //             <Form.Label>Mot de passe</Form.Label>
  //             <Form.Control type="password" placeholder="Mot de passe" />
  //           </Form.Group>
  //         </Row>
  //         <Button variant="primary" type="submit">
  //           Créer mon compte
  //         </Button>
  //       </Form>
  //     </div>
  //   );
  // }

export default SubscribeForm;

