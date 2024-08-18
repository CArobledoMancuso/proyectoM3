import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import turnReducer from './turnReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    turn: turnReducer,
  },
});

export default store;
