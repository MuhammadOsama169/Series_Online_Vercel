import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});
// eslint-disable-next-line no-undef
const apiKey = process.env.VITE_APP_API_KEY2;

export const fetchTrendingMovies = createAsyncThunk(
  'fetchMovies/movies',
  async (term) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    const data = await res.json();
    return data;
  }
);

const trendingMovieSlice = createSlice({
  name: 'movie',
  initialState: {
    data: {},
    selectedMovieDetails: {},
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchTrendingMovies.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default trendingMovieSlice.reducer;
