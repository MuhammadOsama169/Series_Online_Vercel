import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../store/trendingMovies';
import { STATUSES } from '../store/movieSlice';

export const MovieList = () => {
  const dispatch = useDispatch();
  const { data: movies, status } = useSelector((state) => state.trendingmovies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2 className="text-white">Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 place-items-center text-white text-center px-2">
      {movies?.results?.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>
  );
};
