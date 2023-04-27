import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import seriesReducer from './seriesSlice';
import usersReducer from './userSlice';
import trendingMoviesReducer from './trendingMovies';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
    users: usersReducer,
    trendingmovies: trendingMoviesReducer,
  },
});
