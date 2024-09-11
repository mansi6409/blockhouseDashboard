// redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './slices/chartSlice';
import { useDispatch } from 'react-redux';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in dev mode
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a typed `useAppDispatch` hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
