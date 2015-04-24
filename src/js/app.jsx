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