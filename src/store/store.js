import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./product/products.slice";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
