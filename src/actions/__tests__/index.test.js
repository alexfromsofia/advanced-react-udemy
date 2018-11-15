import { addComment } from 'actions/index';
import { ADD_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = addComment();

    expect(action.type).toEqual(ADD_COMMENT);
  });

  it('has the correct payload', () => {
    const payload = 'new comment';
    const action = addComment(payload);

    expect(action.payload).toEqual(payload);
  });
});