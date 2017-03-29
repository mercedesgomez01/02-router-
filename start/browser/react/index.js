import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums.js';
import Album from './components/Album';
import Artists from './components/Artists.js';
import Artist from './components/Artist.js';
import Songs from './components/Songs';
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
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists/:artistId" component={Artist} >
      	<Route path="/artists/:artistId/albums" component={Albums} />
      	<Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <Route path="/artists" component={Artists} />
      
      
    </Route>
  </Router>,
  document.getElementById('app')
);
