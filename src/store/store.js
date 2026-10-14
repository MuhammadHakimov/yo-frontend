import { configureStore } from "@reduxjs/toolkit";
import registrReducer from "./counter/registrSlice";
import { adminApi } from "./admin/adminApi";

export const store = configureStore({
  reducer: {
    registr: registrReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});