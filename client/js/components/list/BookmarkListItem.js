import moment from 'moment';
import * as random from './../../utils/random'
import React, { Component } from 'react';

class BookmarkListItem extends Component {

  render() {

    const itemClassName = this.props.data.hasStar ? 'list-item has-star' : 'list-item';
    const itemClassNameForTag = this.props.data.tags.map((tag, i) => { return `tag-${tag.slug}`}).join(' ');
    const colorTheme = ['#E91E63', '#FFE000', '#26d633'];
    // const colorTheme = ['#E91E63', '#9C27B0', '#8BC34A', '#FFEB3B', '#3F51B5'  ];
    function colorboxStyle() {
      return {
        backgroundColor: random.pick(colorTheme),
        width: `${random.float(50) + 50}%`,
        height: `${random.integer(20) + 10}px`,
        left: `${random.integer(25) + 5}px`,
        top: `${random.integer(40) + 20}px`,
        transform: `rotate(${random.float(-3, 3)}deg) skew(${random.float(-3, 3)}deg)`
      };
    }

    return (
      <div className="column" key={this.props.data.cuid}>
        <div className={`${itemClassName} ${itemClassNameForTag}`}>
          <div className="inner-item">
            <span className="date">{moment(this.props.data.dateAdded).format('ll')}</span>
            <ul className="colorboxs">
              {this.props.data.tags.map((tag, i) => {
                return <li style={colorboxStyle()}></li>
              })}
            </ul>
            <a href={this.props.data.url} target="_blank">
              <h2 className="title" dangerouslySetInnerHTML={{__html: this.props.data.title}} />
            </a>

            <div className="tags">
              {this.props.data.tags.map((tag, i) => {
                return <a href={'/tags/' + tag.slug} key={i}><span className="tag">#{tag.name}</span></a>
              })}
            </div>
            <div className="ui-group">
              <i className="icon ion-ios-star-outline"></i>
              <i className="icon ion-ios-compose-outline"></i>
              <i className="icon ion-ios-trash-outline" onClick={this.props.onRemove.bind(null, this.props.data.cuid)}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookmarkListItem.propTypes = { data: React.PropTypes.object };

export default BookmarkListItem;
