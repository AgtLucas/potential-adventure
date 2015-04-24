import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Login from './login';

let App = React.createClass({
  render() {
    return (
      <nav className="main-nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <RouteHandler />
      </nav>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={Login}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body)
});