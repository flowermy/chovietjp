/*
 * middleware
 * log action when action is dispatched
 *
*/
export const middleware = ({getState, dispatch}) => next => action => {
  next(action);
}
