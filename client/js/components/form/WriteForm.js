import React, { Component } from 'react';

class WriteForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const url = this.state.url.trim();
    const title = this.state.title.trim();
    const tags = this.state.tags.trim();
    if (!url || !title || !tags) {
      return;
    }
    this.props.onBookmarkSubmit({url, title, tags});
    this.setState({url: '', title: '', tags: ''});

    this.props.onMovePage('');
  }

  handleChange(e) {
    let stateObj = {};
    stateObj[e.target.name] = e.target.value;
    this.setState(stateObj);
  }

  handleCloseClick(e) {
    this.props.onMovePage('');
  }

  render() {
    return (
      <div className={this.props.opened ? 'modal is-active' : 'modal'} id="write-form">
        <div className="modal-background" onClick={this.props.onMovePage.bind(null, '')}></div>
        <div className="modal-container">
          <div className="modal-content">
            <div className="box">
              <form id="submitForm" onSubmit={this.handleSubmit.bind(this)}>
                <label className="label">URL</label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange.bind(this)}
                  />
                </p>
                <label className="label">Title</label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                  />
                </p>
                <label className="label">Tags</label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    name="tags"
                    value={this.state.tags}
                    onChange={this.handleChange.bind(this)}
                  />
                </p>
                <p className="tip has-text-right">Separated by comma</p>
                <button className="button is-primary is-medium" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <button className="modal-close" onClick={this.handleCloseClick.bind(this)}></button>
      </div>
    );
  }

  state = {
    title: '',
    url: '',
    tags: '',
    hasStar: false
  }
}

export default WriteForm;
