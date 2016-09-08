import React, { Component } from 'react';
import BookmarkListItem from './BookmarkListItem';
import Bricks from 'bricks.js';

class BookmarkList extends Component {

  componentDidMount() {
    console.log(this.refs.list);



    const sizes = [
      { columns: 2, gutter: 10 },                   // assumed to be mobile, because of the missing mq property
      { mq: '768px', columns: 3, gutter: 10 },
      { mq: '1024px', columns: 6, gutter: 15 }
    ]

// create an instance

    const instance = Bricks({
      container: this.refs.list,
      packed:    'data-packed',        // if not prefixed with 'data-', it will be added
      sizes:     sizes
    });

    instance.pack();
  }

  render() {

    return (
      <div className="" style={{ margin: 0 + ' auto' }} ref="list" >
        {this.props.bookmarks.map((dataitem, index) => {
          return <BookmarkListItem data={dataitem} key={index} onRemove={this.props.onRemove.bind(this)} />;
        })}
      </div>
    );
  }
}

export default BookmarkList;
