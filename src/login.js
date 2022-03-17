import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FormLog from "./Components/FormLog";
import SubscribeForm from "./Components/SubscribeForm";
import CallToAction from "./Components/CallToAction";

//react bootstrap divider = ligne de séparation
import { Dropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

//page de login avec 2 formulaires distincts
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected : "no"
    };
    this.handleConnectedState = this.handleConnectedState.bind(this);
  }
  

  handleConnectedState(connected){
    this.setState({connected});
    // this.state.connected = connected
  }
  render() {
    return (
      <div>
        <Header connected = {this.state.connected}
        handleConnectedState = {this.handleConnectedState}/>
        <Container>
          <Row  className="customRaw">
            <Col><img src="../images/tomNookCTA.png" /></Col>
            <Col><CallToAction /></Col>  
            <Col>
              <FormLog connected={this.state.connected}
              handleConnectedState={this.handleConnectedState}/>
              <Dropdown.Divider />
              <SubscribeForm />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Login;
