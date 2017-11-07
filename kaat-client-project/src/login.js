import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';

class Login extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Log In</h2>
        <br/>
        <form action="/action_page.php" method="get">
        <ul>
          <li> Email: <input type="text" name="email"/> </li> <br/>
          <li> Password: <input type="password" name="password"/> </li> <br/>
        <input type="submit" value="Log In"/>
        </ul>
        </form>
      </div>
    );
  }
}

export default Login;
