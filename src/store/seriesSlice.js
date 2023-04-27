import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});
// eslint-disable-next-line no-undef
const apiKey = process.env.VITE_APP_API_KEY;

export const fetchSeries = createAsyncThunk(
  'fetchSeries/series',
  async (term) => {
    const res = await fetch(
      `http://www.omdbapi.com?apikey=${apiKey}&s=${term}&type=series`
    );
    const data = await res.json();
    return data;
  }
);
export const fetchShowDetails = createAsyncThunk(
  'movies/fetchShowDetails',
  async (id) => {
    const response = await fetch(
      `http://www.omdbapi.com?apikey=${
        import.meta.env.VITE_API_KEY
      }&i=${id}&Plot=full`
    );
    const data = await response.json();
    return data;
  }
);

const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    data: {},
    selectedShowDetails: {},
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchShowDetails.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchSeries.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default seriesSlice.reducer;
