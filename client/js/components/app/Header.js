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
          <a href="#" onClick={this.props.onMovePage.bind(null, 'bookamrk')}>Bookmarks</a>
          <a href="#" onClick={this.props.onMovePage.bind(null, 'tags')}>Tags</a>
          <a href="#" onClick={this.props.onMovePage.bind(null, 'add')}>+Add</a>
          <a href="#"><i className="fa fa-search" style={{ fontSize: 14 + 'px', marginTop: 2 + 'px' }}></i></a>
        </nav>
      </div>
    );
  }
}

export default Header;
