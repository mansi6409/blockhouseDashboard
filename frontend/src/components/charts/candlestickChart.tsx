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

ChartJS.register(CandlestickElement, CandlestickController, CategoryScale, LinearScale, TimeScale, Tooltip);

interface CandlestickChartProps {
  data: ChartData<'candlestick'>;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const options: ChartOptions<'candlestick'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        grid: {
          display: true,
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#000',
        },
      },
    },
  };

  return <Chart type="candlestick" data={data} options={options} />;
};

export default CandlestickChart;
