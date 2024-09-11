// src/hooks/useChartData.ts

'use client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchChartData } from '../redux/slices/chartSlice';
import { RootState, useAppDispatch } from '../redux/store';

export const useChartData = () => {
  const dispatch = useAppDispatch(); // Use the typed dispatch
  const chartData = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    dispatch(fetchChartData()); // Correctly typed dispatch for thunks
  }, [dispatch]);

  return chartData;
};
