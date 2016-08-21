import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookmarkList from '../list/BookmarkList';
import Header from './Header';
import Footer from './Footer';
import WriteForm from '../form/WriteForm';

import { fetchBookmarks } from '../../actions/bookmarksActions';
import { movePage } from '../../actions/pageActions';

@connect((store) => {
  return {
    bookmarks: store.bookmarks.bookmarks,
    bookmarksFetched: store.bookmarks.fetched,
    bookmarksFetching: store.bookmarks.fetching,
    url: store.page.url
  }
})

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchBookmarks());
  }

  onMovePage(url) {
    this.props.dispatch(movePage(url));
  }

  render() {
    const { bookmarks, bookmarksFetching, bookmarksFetched, url } = this.props;
    const body = bookmarksFetched ? <BookmarkList bookmarks={bookmarks} /> : <p>loading</p>;

    console.log(url);

    return (
      <div className="container">
        <Header onMovePage={this.onMovePage.bind(this)} />
        {body}
        <Footer />
        <WriteForm opened={(url === 'add') ? true : false} onMovePage={this.onMovePage.bind(this)}/>
      </div>
    );
  }
}

export default App;
