import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import Item from './item';
import {Link} from 'react-router-dom';

class MainCourses extends Component {
  render() {
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Main courses</h2>
        <br/>
          <ul className="ul-no-bullet">
            { ["maincourses1", "maincourses2", "maincourses3", "maincourses4"].map((item, index) => {
                return (
                  <Item
                    data={[3, item, (index + 1)]}
                  />
                )
              })}
          </ul>
          <Link className="nav-link waves-effect waves-light" to="/categories">Back to list of categories</Link>
      </div>
    );
  }
}

export default MainCourses;
