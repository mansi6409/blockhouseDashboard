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
    maintainAspectRatio: false, // Allows chart to resize within the container
    scales: {
      x: {
        type: 'category', // Use categories (dates) for x-axis
        grid: {
          display: true, // Show grid lines on x-axis
        },
        ticks: {
          maxRotation: 0, // Keep the labels from rotating
          autoSkip: true, // Auto-skip some labels if they overlap
        },
      },
      y: {
        beginAtZero: false, // Allow y-axis to start from data's minimum
        grid: {
          display: true, // Show grid lines on y-axis
        },
        ticks: {
          stepSize: 10, // Adjust this based on your data range
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltips to show data on hover
      },
      legend: {
        display: true,
        position: 'top', // Show legend at the top of the chart
        labels: {
          color: '#000', // Legend text color
        },
      },
    },
  };

  return <Chart type="candlestick" data={data} options={options} />;
};

export default CandlestickChart;
