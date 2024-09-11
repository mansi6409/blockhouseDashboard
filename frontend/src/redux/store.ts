import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './slices/chartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
