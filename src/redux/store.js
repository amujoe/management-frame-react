/*
 * @Author: amujoe
 * @Date: 2020-01-17 18:12:23
 * @Description: file content
 */
import { createStore } from 'redux'
import todoApp from './reducers'

// let store = createStore(todoApp)

const store = createStore(
  todoApp, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export { store }