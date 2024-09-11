// app/page.tsx

'use client';

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchChartData } from "../src/redux/slices/chartSlice";
import { RootState, useAppDispatch } from "../src/redux/store";
import LineChart from "../src/components/charts/lineChart";
import BarChart from "../src/components/charts/barChart";
import PieChart from "../src/components/charts/pieChart";
import CandlestickChart from "../src/components/charts/candlestickChart"; // Import the Candlestick chart

export default function Dashboard() {
  const dispatch = useAppDispatch(); // Use the typed dispatch
  const { line, bar, pie, candlestick, loading, error } = useSelector(
    (state: RootState) => state.chart
  );

  useEffect(() => {
    dispatch(fetchChartData()); // No more type issues
  }, [dispatch]);

  if (loading) return <p>Loading charts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart */}
        {line && (
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
            <LineChart data={line} />
          </div>
        )}

        {/* Bar Chart */}
        {bar && (
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
            <BarChart data={bar} />
          </div>
        )}

        {/* Pie Chart */}
        {pie && (
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
            <PieChart data={pie} />
          </div>
        )}

        {/* Candlestick Chart */}
        {candlestick && (
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Candlestick Chart</h2>
            <CandlestickChart data={candlestick} />
          </div>
        )}
      </div>
    </div>
  );
}
