import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FormLog from "./Components/FormLog";
import SubscribeForm from "./Components/SubscribeForm";
//react bootstrap divider = ligne de séparation
import {Dropdown} from "react-bootstrap";

//page de login avec 2 formulaires distincts
class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Header />
        <FormLog />
        <Dropdown.Divider />
        <SubscribeForm />
        <Footer />
      </div>
    );
  }
}



export default Login;
