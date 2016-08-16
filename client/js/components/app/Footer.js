import React, { Component } from 'react';
import vars from './variables';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {vars.appName} by <a href="http://twitter.com/moonsflow">{vars.author}</a>. All right reserved.
      </footer>
    );
  }
}

export default Footer;
