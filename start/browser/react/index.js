import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums.js';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
//To start using react-router, all we need to do is import the components we
//need into our root js file
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to = "/albums" />
      <Route path="/albums" component={Albums} />
      <Route path="albums/:albumId" component={Album} />
    </Route>
  </Router>,
  document.getElementById('app')
);
