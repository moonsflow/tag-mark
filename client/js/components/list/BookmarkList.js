import React, { Component } from 'react';
import BookmarkListItem from './BookmarkListItem';
import Bricks from 'bricks.js';

class BookmarkList extends Component {



  render() {

    return (
      <div className="list" ref="list" >
        {this.props.bookmarks.map((dataitem, index) => {
          return <BookmarkListItem data={dataitem} key={index} onRemove={this.props.onRemove.bind(this)} />;
        })}
      </div>
    );
  }
}

export default BookmarkList;
