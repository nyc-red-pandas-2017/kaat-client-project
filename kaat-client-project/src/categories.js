import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import {Link} from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Browse categories</h2>
        <br/>
          <ul className="ul-no-bullet">
            <li> <Link className="nav-link waves-effect waves-light" to="/categories/1">Appetizers</Link> </li>
            <li> <Link className="nav-link waves-effect waves-light" to="/categories/2">Salads</Link> </li>
            <li> <Link className="nav-link waves-effect waves-light" to="/categories/3">Main courses</Link> </li>
            <li> <Link className="nav-link waves-effect waves-light" to="/categories/4">Desserts</Link> </li>
          </ul>
      </div>
    );
  }
}

export default Category;
