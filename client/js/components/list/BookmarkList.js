import 'whatwg-fetch';
import moment from 'moment';
import React, { Component } from 'react';
import BookmarkListItem from './BookmarkListItem';

class BookmarkList extends Component {

  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    fetch('/api/bookmarks/')
      .then(res => { return res.json() })
      .then(result => { this.setState({ data: result.bookmarks }); });
  }

  render() {
    if (this.state.data) {
      const rows = this._splitArray(this.state.data, this.props.columns);
      return (
        <div>
          {rows.map((row, id) => {
            return (
              <div className="row" key={id}>
                {row.map((dataitem, index) => {
                  return <BookmarkListItem data={dataitem} key={index} />;
                })}
              </div>
            );
          })}
        </div>
      );
    }
    return <div>Loading...</div>;
  }

  _splitArray(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
}

BookmarkList.propTypes = { columns: React.PropTypes.number };
BookmarkList.defaultProps = { columns: 4 }

export default BookmarkList;
