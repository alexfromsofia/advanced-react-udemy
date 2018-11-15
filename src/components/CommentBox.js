import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // debugger
    // this.props.addComment(this.state.comment);

    this.setState({ comment: '' })
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
          <button type="submit">Submit content</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps, { actions })(CommentBox);