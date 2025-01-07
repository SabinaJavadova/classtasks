import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "./Sevices/CategoriesApi";


export const store = configureStore({
  reducer: {

    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});
setupListeners(store.dispatch);
