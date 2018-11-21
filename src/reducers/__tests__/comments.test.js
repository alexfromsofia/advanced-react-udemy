import commentsReducer from '../comments';
import { ADD_COMMENT } from "../../actions/types";

it('handles actions of type ADD_COMMENT', () => {
  const payload = 'new comment';
  const action = { type: ADD_COMMENT, payload };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([payload]);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});