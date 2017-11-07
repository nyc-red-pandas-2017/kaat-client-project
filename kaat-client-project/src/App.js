import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import About from './about';
import Signup from './signup';
import Login from './login';
import Categories from './categories';
import Appetizers from './appetizers';
import Salads from './salads';
import MainCourses from './maincourses';
import Desserts from './desserts';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/appetizers" component={Appetizers}/>
          <Route path="/salads" component={Salads}/>
          <Route path="/maincourses" component={MainCourses}/>
          <Route path="/desserts" component={Desserts}/>
        </div>
      </Router>
    );
  }
}

const Nav = () => (
  <nav className=" navbar navbar-expand-lg navbar-dark">
    <div className="container">

      <a className="navbar-brand waves-effect waves-light" href="/">Recipe Manager</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link waves-effect waves-light" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link waves-effect waves-light" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link waves-effect waves-light" to="/login">Log in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link waves-effect waves-light" to="/categories">Categories</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><i className="fa fa-user"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
  const Home = () => (
    <div>
      <header>
      </header>

      <div className="view hm-black-light">
        <div className="full-bg-img flex-center pattern-4">

          <ul>
            <li>
              <h1 className="h1-responsive wow fadeInUp title"><strong>Recipe Manager!</strong></h1>
            </li>
            <li>
              <div className="row wow fadeIn" data-wow-delay="0.4s">
                <ul>
                  <li> <a className="nav-link waves-effect waves-light" style={{color:'white'}} href="/appetizers">Appetizers</a> </li>
                  <li> <a className="nav-link waves-effect waves-light" style={{color:'white'}} href="/salads">Salads</a> </li>
                  <li> <a className="nav-link waves-effect waves-light" style={{color:'white'}} href="/main-courses">Main courses</a> </li>
                  <li> <a className="nav-link waves-effect waves-light" style={{color:'white'}} href="/desserts">Desserts</a> </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>




        <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>

        <script type="text/javascript" src="js/popper.min.js"></script>

        <script type="text/javascript" src="js/bootstrap.min.js"></script>

        <script type="text/javascript" src="js/mdb.min.js"></script>
      </div>
    )

    export default App;
