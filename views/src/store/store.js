import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import { middleware } from '../middleware/middleware'
import thunk from 'redux-thunk'

const initState = {

};

export const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(
    middleware,
    thunk
  )
);
