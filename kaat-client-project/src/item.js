import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import {Link} from 'react-router-dom'


class Item extends Component {
  render() {
    return (
            <li> <Link className="nav-link waves-effect waves-light"  to={`${this.props.data[0]}/recipes/${this.props.data[2]}`}>{this.props.data[1]}</Link>  </li>
    );
  }
}

export default Item;
