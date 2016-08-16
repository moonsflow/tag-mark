import React, { Component } from 'react';
import vars from './variables';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo u-centered">
          <h1 className="app-name">{vars.appName}</h1>
        </div>
        <nav className="navigation">
          <a href="#">Bookmarks</a>
          <a href="#">Tags</a>
          <a href="#">+Add</a>
        </nav>
      </div>
    );
  }
}

export default Header;
