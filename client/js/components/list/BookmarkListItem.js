import moment from 'moment';
import React, { Component } from 'react';

class BookmarkListItem extends Component {



  render() {
    const itemClassName = this.props.data.hasStar ? 'list-item has-star' : 'list-item';
    const itemClassNameForTag = this.props.data.tags.map((tag, i) => { return `tag-${tag.slug}`}).join(' ');

    return (
      <div className="column is-one-quarter" key={this.props.data.cuid}>
        <div className={`${itemClassName} ${itemClassNameForTag}`}>
          <span className="date">{moment(this.props.data.dateAdded).format('ll')}</span>
          <a href={this.props.data.url} target="_blank">
            <h2 className="title is-4" dangerouslySetInnerHTML={{__html: this.props.data.title}} />
          </a>

          <div className="tags">
            {this.props.data.tags.map((tag, i) => {
              return <a href={'/tags/' + tag.slug} key={i}><span className="tag">#{tag.name}</span></a>
            })}
          </div>
          <div className="ui-group">
            <i className="fa fa-star"  aria-hidden="true"></i>
            <i className="fa fa-pencil"   aria-hidden="true"></i>
            <i className="fa fa-times" onClick={this.props.onRemove.bind(null, this.props.data.cuid)}   aria-hidden="true"></i>
          </div>

        </div>
      </div>
    );
  }
}

BookmarkListItem.propTypes = { data: React.PropTypes.object };

export default BookmarkListItem;
