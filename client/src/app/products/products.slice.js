import { createSlice } from '@reduxjs/toolkit';

import { getProductAll, createProduct, removeProduct} from './products.action';

const PRODUCTS_INITIAL_STATE = {
  productItems: [],
  status: 'idle',
  error: false,
};

const productsSlice = createSlice({
  name: 'product',
  initialState: PRODUCTS_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getProductAll.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductAll.fulfilled, (state, action) => {
        state.productItems = action.payload
        state.status = 'idle';
      })
      .addCase(getProductAll.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'idle';
      })
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.productItems.push(action.payload);
        state.status = 'idle';
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'idle';
      })
      .addCase(removeProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.productItems = state.productItems.filter(
          (product) => product.id !== action.payload
        );
        state.status = 'idle';
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'idle';
      });
  },
});

export default productsSlice.reducer;