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
import 'chartjs-adapter-date-fns';


ChartJS.register(CandlestickElement, CandlestickController, CategoryScale, LinearScale, TimeScale, Tooltip);


interface OHLCData {
  x: string | number | Date; 
  o: number;
  h: number;
  l: number;
  c: number;
}

interface CandlestickChartProps {
  data: ChartData<'candlestick'>;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const options: ChartOptions<'candlestick'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time', 
        time: {
          unit: 'day', 
          tooltipFormat: 'MMM dd, yyyy', 
          displayFormats: {
            day: 'MMM dd', 
          },
        },
        grid: {
          display: true,
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          source: 'auto', 
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
        title: {
          display: true,
          text: 'Price',
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const raw = context.raw as OHLCData; 
            return `O: ${raw.o}, H: ${raw.h}, L: ${raw.l}, C: ${raw.c}`; 
          },
        },
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return <Chart type="candlestick" data={data} options={options} />;
};

export default CandlestickChart;
