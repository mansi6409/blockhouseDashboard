// components/charts/LineChart.tsx
'use client';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';

// Register the required components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  data: ChartData<'line'>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const options: ChartOptions<'line'> = {
    responsive: true,
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
