import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App/>
    </Root>);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
