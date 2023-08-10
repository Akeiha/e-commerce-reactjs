import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, { payload: product }) => {
      state.value.push(product);
    },
    newCountProduct: (state, { payload: newCount }) => {
      const { id, count } = newCount;
      const isEmptyProduct = state.value.findIndex((val) => val.id === id);
      state.value[isEmptyProduct].count = count;
    },
    delProduct: (state, { payload: productId }) => {
      state.value = state.value.filter((val) => val.id !== productId);
    },
  },
});

export const { addProduct, newCountProduct, delProduct } =
  productsSlice.actions;

export const selectCount = (state) => state.products.value;

export default productsSlice.reducer;

// reducers функции которые изменяют стор reducers === actions
