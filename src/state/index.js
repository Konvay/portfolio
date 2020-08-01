import { createStore, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'

import allReducers from './reducers/all.reducers'

const persistConfig = {
  key: 'authentication',
  storage: storage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, {}, middleware);

export const persistor = persistStore(store);
export default store;
