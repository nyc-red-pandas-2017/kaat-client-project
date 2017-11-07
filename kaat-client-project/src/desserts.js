import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import Item from './item';
import {Link} from 'react-router-dom'

class Desserts extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Desserts</h2>
        <br/>
          <ul className="ul-no-bullet">
            { ["desserts1", "desserts2", "desserts3", "desserts4"].map((item, index) => {
                return (
                  <Item
                    data={[4, item, (index + 1)]}
                  />
                )
              })}
          </ul>
          <Link className="nav-link waves-effect waves-light" to="/categories">Back to list of categories</Link>
      </div>
    );
  }
}

export default Desserts;
