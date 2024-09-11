'use client';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';

Chart.register(ArcElement, Title, Tooltip, Legend);

interface PieChartProps {
  data: ChartData<'pie'>;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const options: ChartOptions<'pie'> = {
    responsive: true,
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
