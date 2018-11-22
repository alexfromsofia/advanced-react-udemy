export default ({ dispatch }) => next => action => {
  // Check if action has a promise on its payload property
  // If it does, then wait for it to resolve
  // if it doesn't, then send the action to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload
    .then((response) => {
      const newAction = { ...action, payload: response }

      dispatch(newAction);
    })
}