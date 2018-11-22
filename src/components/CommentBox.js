import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthHOC from './AuthHOC';
import * as actions from '../actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.comment);

    this.setState({ comment: '' })
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}

        />
        <div>
          <button 
            className="submit" 
            type="submit">
              Submit content
          </button>
        </div>
        <div>
          <button 
            className="fetch-comments"
            type="button" 
            onClick={this.props.fetchComments}>
              Fetch comments
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, actions)(AuthHOC(CommentBox));
