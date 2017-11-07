import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import Item from './item';

class MainCourses extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Main courses</h2>
        <br/>
          <ul>
            { ["maincourses1", "maincourses2", "maincourses3", "maincourses4"].map((item) => {
                return (
                  <Item
                    data={item}
                  />
                )
              })}
          </ul>
          <a className="nav-link waves-effect waves-light" href="/categories">Back to list of categories</a>
      </div>
    );
  }
}

export default MainCourses;
