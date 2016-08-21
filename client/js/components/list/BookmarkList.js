import React, { Component } from 'react';
import BookmarkListItem from './BookmarkListItem';

class BookmarkList extends Component {
  render() {
    return (
      <div className="columns is-multiline" >
        {this.props.bookmarks.map((dataitem, index) => {
          return <BookmarkListItem data={dataitem} key={index} />;
        })}
      </div>
    );
  }
}

export default BookmarkList;
