import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../../actions/auth";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
        <Link to="/login">Login</Link>
  </div>
  );

export default HomePage;
