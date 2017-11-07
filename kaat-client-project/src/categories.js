import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';

class Category extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Browse categories</h2>
        <br/>
          <ul>
            <li> <a className="nav-link waves-effect waves-light" href="/appetizers">Appetizers</a> </li>
            <li> <a className="nav-link waves-effect waves-light" href="/salads">Salads</a> </li>
            <li> <a className="nav-link waves-effect waves-light" href="/main-courses">Main courses</a> </li>
            <li> <a className="nav-link waves-effect waves-light" href="/desserts">Desserts</a> </li>
          </ul>
      </div>
    );
  }
}

export default Category;
