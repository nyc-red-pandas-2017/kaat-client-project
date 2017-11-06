import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
// import { login } from "../../actions/auth";


class LoginPage extends React.Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return(
    <div>
      <h1>Login Page</h1>
      <LoginForm submit={this.submit}/>
    </div>
    );
  }
}

export default LoginPage;
