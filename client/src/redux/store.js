import { configureStore } from '@reduxjs/toolkit'
import UserStore from '../UserStore';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    user: UserStore,
   });

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  });

  export default store;