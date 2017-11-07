import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';

class Appetizers extends Component {
  render() {
    let apps = [{
        name: 'foo',
        link: 'bar'
    },
    {

    }]
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Appetizers</h2>
        <br/>
          <ul>
          { /* {["appetizer1", "appetizer2", "appetizer3", "appetizer4"].map((item) => {
              return (
                <Item
                  data={item}
                />
              )
            })} */}
          </ul>
          <a className="nav-link waves-effect waves-light" href="/categories">Back to list of categories</a>
      </div>
    );
  }
}

export default Appetizers;
