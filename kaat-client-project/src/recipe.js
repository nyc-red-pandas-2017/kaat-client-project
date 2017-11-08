import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Recipe extends Component {
  constructor(){
    super();
    this.state= {
      recipe: {}
    }
  }

  componentDidMount(){
    //STEP1: use current url
    //STEP2: make an ajax request to get that recipe
    $.ajax({
      url: `http://localhost:5000/${this.props.match.url}`,
      type: 'GET',
      success: (response) => {
        //console.log(response);
        this.setState({recipe: response["recipe"]})
      }
      });
  }

  render() {
    let recipe = this.state.recipe;
    console.log(recipe);
    console.log(recipe.category_id);
    //var url_category = "/categories/" + {recipe.category_id};
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
                  <p className="white-bg-p">{recipe.name}</p>
                </center>
                </li>
                <li>
                  <h4><b>Prep time</b></h4>
                  <p className="white-bg-p">{recipe.prep_time} minutes</p>
                </li>
                <li>
                  <h4><b>Ingredients</b></h4>
                  <p className="white-bg-p-2">{recipe.ingredients}</p>
                </li>
                <li>
                  <h4><b>Direction</b></h4>
                  <p className="white-bg-p-2">{recipe.directions}</p>
                </li>
                <li>
                  <h4><b>Comments</b></h4>
                  <p className="white-bg-p-2">This was a great recipe!</p>


                </li>
              </ul>

            </div>
          </div>
    );
  }
}

export default Recipe;
