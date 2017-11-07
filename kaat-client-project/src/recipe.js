import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import Item from './item';
import {Link} from 'react-router-dom';

class Recipe extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="view-other hm-black-light">
        <br/>
        <h2>Recipe</h2>

        <Link className="nav-link waves-effect waves-light" to="/categories">Back to list of categories</Link>
            <div className="recipe-container">
              <ul className="ul-no-bullet">
                <li>
                  <center>
                  <h4><b>Name</b></h4>
                  <p className="white-bg-p">Lorem ipsum </p>
                </center>
                </li>
                <li>
                  <h4><b>Ratings</b></h4>
                  <p className="white-bg-p">5</p>
                </li>
                <li>
                  <h4><b>Prep time</b></h4>
                  <p className="white-bg-p">10 mins</p>
                </li>
                <li>
                  <h4><b>Ingredients</b></h4>
                  <p className="white-bg-p-2">Lorem ipsum dolor sit am,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </li>
                <li>
                  <h4><b>Direction</b></h4>
                  <p className="white-bg-p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </li>
                <li>
                  <h4><b>Comments</b></h4>
                  <p className="white-bg-p-2">Lorem ipsum dolor sit amet!</p>

                
                </li>
              </ul>

            </div>
          </div>
    );
  }
}

export default Recipe;
