'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { CandlestickElement, CandlestickController } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';

// Register the required components for the candlestick chart
ChartJS.register(CandlestickElement, CandlestickController, CategoryScale, LinearScale, TimeScale, Tooltip);

interface CandlestickChartProps {
  data: ChartData<'candlestick'>;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const options: ChartOptions<'candlestick'> = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        // ticks: {
        //   source: 'labels',
        // },
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Chart type="candlestick" data={data} options={options} />;
};

export default CandlestickChart;
