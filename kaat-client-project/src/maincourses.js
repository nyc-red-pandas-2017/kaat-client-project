import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';

class MainCourses extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Main courses</h2>
        <br/>
          <ul>
            <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
            <li> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
            <li> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </li>
          </ul>
          <a className="nav-link waves-effect waves-light" href="/categories">Back to list of categories</a>
      </div>
    );
  }
}

export default MainCourses;
