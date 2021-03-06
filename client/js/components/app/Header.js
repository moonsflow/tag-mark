import React, { Component } from 'react';
import vars from './variables';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1 className="app-name">{vars.appName}</h1>
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
