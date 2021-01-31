import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './people';

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(require('redux-logger').default);
}

const middlewareEnhancer = applyMiddleware(...middleware);

export default createStore(rootReducer, middlewareEnhancer);
