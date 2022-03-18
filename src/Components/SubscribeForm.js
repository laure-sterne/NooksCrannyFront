import React, { Component } from "react";
import { Form, Button, Row, InputGroup, Col } from "react-bootstrap";

//formulaire pour s'inscrire 
class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail : "",
      mdp : "",
      pseudo : "",
      created : ""
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit = (event) => {
    console.log(this.state);
        fetch('http://localhost:4000/createuser', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify({mail: this.state.mail, mdp: this.state.mdp, pseudo: this.state.pseudo })
      }).then(
        response => 
          response.json()
      )
        .catch(error => "error" + error)
        .then(response => this.setState({created: response.okk}))
      ;
 
    event.preventDefault();
    // event.stopPropagation();
}

handleChange = (event) => {
  
  this.setState({[event.target.name] : event.target.value});
}

render(){
  return (
    <>
  {/* // <form onSubmit={this.handleSubmit}>
  //     <label>
  //       Mail:
  //       <input name="mail" placeholder="Mail" value={this.state.mail}  onChange={this.handleChange} />
  //       Mot de passe
  //       <input name="mdp" placeholder="Mdp" value={this.state.mdp}  onChange={this.handleChange} />
  //       Pseudo
  //       <input name="pseudo" placeholder="Pseudo" value={this.state.pseudo}  onChange={this.handleChange} />
  //     </label>
  //     <input type="submit" value="Submit"/>
  //     <p>{this.state.created}</p> 
  //   </form> */}
  <h3> Créer un compte </h3>
  <Form onSubmit={this.handleSubmit}>
    <Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse e-mail</Form.Label>
        <Form.Control 
          name="mail" 
          value={this.state.mail} 
          placeholder="tomnook@tominc.ac" 
          onChange={this.handleChange}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control 
        name="mdp" 
        type="password"
        value={this.state.mdp} 
        placeholder="Mot de passe" 
        onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Pseudo</Form.Label>
        <Form.Control 
        name="pseudo" 
        value={this.state.pseudo} 
        placeholder="Pseudo" 
        onChange={this.handleChange}/>
      </Form.Group>

    </Row>
    <Button variant="primary" type="submit">
      M'enregistrer
    </Button> 
    <p>{this.state.created}</p> 
    

  </Form> 

  </>
  );
}
}

export default SubscribeForm;

