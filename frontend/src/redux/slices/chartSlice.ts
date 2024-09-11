// redux/slices/chartSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the chart state interface
interface ChartState {
  candlestick: any;
  line: any;
  bar: any;
  pie: any;
  loading: boolean;
  error: string | null;
}

// Initial state for the slice
const initialState: ChartState = {
  candlestick: null,
  line: null,
  bar: null,
  pie: null,
  loading: false,
  error: null,
};

// Fetch chart data from the backend
export const fetchChartData = createAsyncThunk(
  "chart/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const [candlestickRes, lineRes, barRes, pieRes] = await Promise.all([
        axios.get("http://localhost:8000/api/candlestick-data/"),
        axios.get("http://localhost:8000/api/line-chart-data/"),
        axios.get("http://localhost:8000/api/bar-chart-data/"),
        axios.get("http://localhost:8000/api/pie-chart-data/"),
      ]);

      return {
        candlestick: candlestickRes.data,
        line: lineRes.data,
        bar: barRes.data,
        pie: pieRes.data,
      };
    } catch (error: any) {
      // Handle error and return rejection with value
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

// Chart slice definition
const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.candlestick = action.payload.candlestick;
        state.line = action.payload.line;
        state.bar = action.payload.bar;
        state.pie = action.payload.pie;
        state.loading = false;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default chartSlice.reducer;
