/*
 * @Author: amujoe
 * @Date: 2020-01-17 18:12:23
 * @Description: file content
 */
import { createStore } from 'redux'
import app from './reducers'

const store = createStore(
  app, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store }