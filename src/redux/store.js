import {createStore} from 'redux'
import rootReducer from './reducer'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const middlewares = [thunk];
export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);