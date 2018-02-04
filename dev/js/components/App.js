import React from 'react';
import Login from '../components/login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from "./homepage";
import {handler} from "../service/api";

require('../../scss/style.scss');

const RouteAppilcation = () => {
  handler.initApp();
  return (
      <Router>
        <div className="container">
          <h1>RapidApi Task</h1>
          <h5>Username:rapid</h5>
          <h5>Password:rapid</h5>
          <Route exact path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
        </div>
      </Router>);
}

export default RouteAppilcation;
