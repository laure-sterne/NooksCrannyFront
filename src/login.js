import React, { Component } from "react";
import Header from "./Components/Header";
import FormLog from "./Components/FormLog";
import SubscribeForm from "./Components/SubscribeForm";
import {Dropdown} from "react-bootstrap";

        
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
      </div>
    );
  }
}



export default Login;
