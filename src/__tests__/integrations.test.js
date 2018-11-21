import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import { commentsAPIURL } from '../actions';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(commentsAPIURL, {
    status: 200,
    response: [{ name: 'Comment 1' }, { name: 'Comment 2' }],
  })
});

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  wrapped.find('.fetch-comments').simulate('click');
  
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});