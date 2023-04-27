import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from './MovieCard';
import { fetchSeries } from '../store/seriesSlice';
import { STATUSES } from '../store/seriesSlice';

export const SeriesListing = () => {
  const dispatch = useDispatch();
  const { data: movies, status } = useSelector((state) => state.series);
  const seriesText = 'The Walking Dead';
  useEffect(() => {
    dispatch(fetchSeries(seriesText));
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2 className="text-white">Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  let renderMovies = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
        // movie is sent as prop to MoviCard component
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="my-10 mx-10">
      <div className="grid grid-col md:grid-cols-5 gap-5 place-items-center">
        {renderMovies}
      </div>
    </div>
  );
};
