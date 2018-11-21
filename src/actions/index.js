import axios from 'axios';
import { ADD_COMMENT, FETCH_COMMENTS, TOGGLE_AUTH } from './types';

export const commentsAPIURL = 'http://jsonplaceholder.typicode.com/comments';

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  }
};

export function fetchComments() {
  const response = axios.get(commentsAPIURL)

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function toggleAuth(isLoggedIn) {
  return {
    type: TOGGLE_AUTH,
    payload: isLoggedIn
  }
}