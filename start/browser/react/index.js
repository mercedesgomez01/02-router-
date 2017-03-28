import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
//To start using react-router, all we need to do is import the components we
//need into our root js file
import { Router, Route, hashHistory } from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
    </Route>
  </Router>,
  document.getElementById('app')
);
