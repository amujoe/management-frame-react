/*
 * @Author: amujoe
 * @Date: 2020-01-17 18:12:23
 * @Description: file content
 */
import { createStore } from 'redux'
import app from './reducers'

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['MENU'] // 白名单
}


const myPersistReducer = persistReducer(persistConfig, app);

const store = createStore(
  myPersistReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store)

export { store, persistor }