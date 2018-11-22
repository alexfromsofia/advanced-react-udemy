import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from '../actions';

class App extends Component {
  renderButton() {
    const { auth, toggleAuth } = this.props;
    let buttonText = '';

    if (auth) {
      buttonText = 'out'  
    } else {
      buttonText = 'in'
    }

    return (
      <button onClick={() => toggleAuth(!auth)}>{`Sign ${buttonText}`}</button>
    )
  }
  
  renderHeader() {
    return (
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/post">Post a Comment</Link></li>
      <li>{this.renderButton()}</li>
    </ul>
    )
  }
  
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )

  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, actions)(App);
