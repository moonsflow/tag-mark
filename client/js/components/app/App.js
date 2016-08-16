import React, { Component } from 'react';
import BookmarkList from '../list/BookmarkList';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <BookmarkList />
        <Footer />
      </div>
    );
  }
}

export default App;
