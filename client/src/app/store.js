import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from './products/products.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer
  },
});
