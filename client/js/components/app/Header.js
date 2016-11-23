import React, { Component } from 'react';
import vars from './variables';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo u-centered">
          <h1 className="app-name">{vars.appName}</h1>
        </div>
        <div className="search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" id="search-input"/>
        </div>
        <nav className="navigation">
          {/*<a href="#" onClick={this.props.onMovePage.bind(null, 'bookamrk')}>Bookmarks</a>*/}
          <a href="#" onClick={this.props.onMovePage.bind(null, 'tags')}>Tags</a>
          <a href="#" onClick={this.props.onMovePage.bind(null, 'category')}>Category</a>
        </nav>
      </div>
    );
  }
}

export default Header;
