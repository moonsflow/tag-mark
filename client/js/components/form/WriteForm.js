import React, { Component } from 'react';

class WriteForm extends Component {

  render() {
    return (
      <div className={this.props.opened ? 'modal is-active' : 'modal'} id="write-form">
        <div className="modal-background" onClick={this.props.onMovePage.bind(null, '')}></div>
        <div className="modal-container">
          <div className="modal-content">
            <div className="box">
              <form action="/api/bookmarks" method="post" id="submitForm">
                <label className="label">URL</label>
                <p className="control">
                  <input className="input" type="text" name="url" />
                </p>
                <label className="label">Title</label>
                <p className="control">
                  <input className="input" type="text" name="title" />
                </p>
                <label className="label">Tags</label>
                <p className="control">
                  <input className="input" type="text" name="tags" />
                </p>
                <p className="tip has-text-right">Separated by comma</p>
                <button className="button is-primary is-medium" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <button className="modal-close" onClick={this.props.onMovePage.bind(null, '')}></button>
      </div>
    );
  }
}

export default WriteForm;
