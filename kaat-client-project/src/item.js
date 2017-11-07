import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';

class Item extends Component {
  render() {
    return (
            <li> <a className="nav-link waves-effect waves-light"  href="#">{this.props.data}</a>  </li>
    );
  }
}

export default Item;
