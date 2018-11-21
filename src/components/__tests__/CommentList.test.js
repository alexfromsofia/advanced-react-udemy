import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentList from '../CommentList';

let wrapped;
let initialState;

beforeEach(() => {
  initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  )
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toBe(initialState.comments.length)
});

it('shows the text for each comment', () => {
  initialState.comments.forEach((comment, i) => {
    expect(wrapped.find('li').at(i).text()).toContain(initialState.comments[i])
  })
});