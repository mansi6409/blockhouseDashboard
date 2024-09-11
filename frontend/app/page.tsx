'use client';

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchChartData } from "../src/redux/slices/chartSlice";
import { RootState, useAppDispatch } from "../src/redux/store";
import LineChart from "../src/components/charts/lineChart";
import BarChart from "../src/components/charts/barChart";
import PieChart from "../src/components/charts/pieChart";
import CandlestickChart from "../src/components/charts/candlestickChart";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('bar');
  const dispatch = useAppDispatch();
  const { candlestick, line, bar, pie, loading, error } = useSelector(
    (state: RootState) => state.chart
  );

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

  const renderChart = () => {
    if (loading) return <p className="text-center">Loading charts...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    switch (activeTab) {
      case 'bar':
        return bar && bar.labels && bar.datasets ? <BarChart data={bar} /> : <p className="text-center">No data for bar chart</p>;
      case 'line':
        return line && line.labels && line.datasets ? <LineChart data={line} /> : <p className="text-center">No data for line chart</p>;
      case 'pie':
        return pie && pie.labels && pie.datasets ? <PieChart data={pie} /> : <p className="text-center">No data for pie chart</p>;
      // case 'pie':
      //   return pie && pie.labels && pie.datasets ? (
      //     <div className="w-full h-auto flex justify-center">
      //       <div className="w-[250px] h-[250px]">
      //         <PieChart data={pie} />
      //       </div>
      //     </div>
      //   ) : (
      //     <p className="text-center">No data for pie chart</p>
      //   );
      case 'candlestick':
        console.log(candlestick);
        console.log(candlestick.labels);
        console.log(candlestick.datasets);
        return candlestick && candlestick.labels && candlestick.datasets ? (
          <CandlestickChart data={candlestick} />
        ) : (
          <p className="text-center">No data for candlestick chart</p>
        );
      default:
        return <BarChart data={bar} />;
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        <a href="https://blockhouse.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Dashboard
        </a>
      </h1>

      {/* Tab Navigation */}
      <div className="tabs flex justify-center mb-6">
        <button
          className={`tab mx-2 px-6 py-2 border rounded-lg transition-colors duration-300 ${
            activeTab === 'bar'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-gray-100 text-blue-500 border-blue-500 hover:bg-blue-200'
          }`}
          onClick={() => setActiveTab('bar')}
        >
          Bar Chart
        </button>
        <button
          className={`tab mx-2 px-6 py-2 border rounded-lg transition-colors duration-300 ${
            activeTab === 'line'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-gray-100 text-blue-500 border-blue-500 hover:bg-blue-200'
          }`}
          onClick={() => setActiveTab('line')}
        >
          Line Chart
        </button>
        <button
          className={`tab mx-2 px-6 py-2 border rounded-lg transition-colors duration-300 ${
            activeTab === 'pie'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-gray-100 text-blue-500 border-blue-500 hover:bg-blue-200'
          }`}
          onClick={() => setActiveTab('pie')}
        >
          Pie Chart
        </button>
        <button
          className={`tab mx-2 px-6 py-2 border rounded-lg transition-colors duration-300 ${
            activeTab === 'candlestick'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-gray-100 text-blue-500 border-blue-500 hover:bg-blue-200'
          }`}
          onClick={() => setActiveTab('candlestick')}
        >
          Candlestick Chart
        </button>
      </div>

      {/* Chart Display */}
      <div className="chart-container w-full p-4 bg-white shadow-md rounded-md">
        {renderChart()}
      </div>
    </div>
  );
}
