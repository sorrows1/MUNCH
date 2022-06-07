import { createSelector } from 'reselect';

const selectProductsReducer = (state) => state.product;

export const selectProducts = createSelector(
    [selectProductsReducer],
    product => product.productItems
)