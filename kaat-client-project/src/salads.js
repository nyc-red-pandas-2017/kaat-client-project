import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import Item from './item';

class Salads extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Salads</h2>
        <br/>
          <ul>
            { ["salads1", "salads2", "salads3", "salads4"].map((item, index) => {
                return (
                  <Item
                    data={[2, item, (index + 1)]}
                  />
                )
              })}
          </ul>
          <a className="nav-link waves-effect waves-light" href="/categories">Back to list of categories</a>
      </div>
    );
  }
}

export default Salads;
