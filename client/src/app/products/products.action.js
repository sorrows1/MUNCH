import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:5000/api/v1'

export const getProductAll = createAsyncThunk(
  'product/getProductAll',
  async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data
    } catch (err) {
      return err;
    }
  }
);

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
)

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (product) => {
    try {
      console.log(product)
      const response = await axios.post(`${BASE_URL}/products`, product, {
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

export const removeProduct = createAsyncThunk(
  'product/removeProduct',
  async (productId) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/products/${productId}`
      );
      if (response.status !== 204) throw new Error('Failed to remove product');
      return productId;
    } catch (err) {
      return err;
    }
  }
);
