import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import transactionsSlice from "./transactionsSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    transactions: transactionsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
