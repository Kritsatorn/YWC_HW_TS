import React from 'react';
import { history } from './config';
import ReactDOM from 'react-dom';
import Home from '../src/pages/HomePage/HomePage';
import { Route, Switch, Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';


ReactDOM.render(
  <Router history = {history}>
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
  </Router>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
