import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import Item from './item';

class Recipe extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="view-other hm-black-light">
            <div className="recipe-container">
              <ul>
                <li>
                  Id <p>{this.props.match.params.recipeId}</p>
                </li>
                <li>
                  Name <p>{this.props.match.params.name}</p>
                </li>
                <li>
                  Ratings
                </li>
                <li>
                  Prep time
                </li>
                <li>
                  Ingredients
                </li>
                <li>
                  Direction
                </li>
                <li>
                  Comments
                </li>
              </ul>
            </div>
          </div>
    );
  }
}

export default Recipe;
