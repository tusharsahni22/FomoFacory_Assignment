import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './reducer';

const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});

export default store;