'use client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchChartData } from '../redux/slices/chartSlice';
import { RootState, useAppDispatch } from '../redux/store';

export const useChartData = () => {
  const dispatch = useAppDispatch();
  const chartData = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

  return chartData;
};
