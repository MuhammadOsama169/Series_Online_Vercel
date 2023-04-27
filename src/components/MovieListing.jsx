import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../components/MovieCard';
import { fetchMovies } from '../store/movieSlice';
import { STATUSES } from '../store/movieSlice';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import { Autoplay, Navigation } from 'swiper';

export const MovieListing = () => {
  const dispatch = useDispatch();
  const { data: movies, status } = useSelector((state) => state.movies);
  const placeHolderMovies = 'star wars';

  useEffect(() => {
    dispatch(fetchMovies(placeHolderMovies));
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
      movies?.Search?.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <Swiper
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Navigation]}
      spaceBetween={0}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        850: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {movies?.Response === 'True' &&
        movies?.Search?.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <div className="mt-5 hover:scale-[0.95] cursor-pointer text-white w-[220px]">
                <img
                  className="h-[350px]"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <h4 className="text-center">{movie.Title}</h4>
                <p className="text-center">{movie.Year}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
