import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';

class Signup extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Sign up</h2>
        <br/>
        <form action="/action_page.php" method="get">
        <ul>
          <li> First name: <input type="text" name="first-name"/><br/> </li>
          <li> Last name: <input type="text" name="last-name"/><br/> </li>
          <li> Email: <input type="text" name="email"/><br/> </li>
          <li> Password: <input type="password" name="password"/><br/> </li>
          <br/>
          <input type="submit" value="Sign Up"/>
        </ul>
        </form>
      </div>
    );
  }
}

export default Signup;
