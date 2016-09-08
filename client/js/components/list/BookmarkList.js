import React, { Component } from 'react';
import BookmarkListItem from './BookmarkListItem';


class BookmarkList extends Component {



  render() {

    return (
      <div className="columns is-multiline" ref="list" >
        {this.props.bookmarks.map((dataitem, index) => {
          return <BookmarkListItem data={dataitem} key={index} onRemove={this.props.onRemove.bind(this)} />;
        })}
      </div>
    );
  }
}

export default BookmarkList;
