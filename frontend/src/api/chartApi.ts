import axios from 'axios';

export const fetchCandlestickData = async () => {
  const response = await axios.get('http://localhost:8000/api/candlestick-data/');
  return response.data;
};

export const fetchLineChartData = async () => {
  const response = await axios.get('http://localhost:8000/api/line-chart-data/');
  return response.data;
};
