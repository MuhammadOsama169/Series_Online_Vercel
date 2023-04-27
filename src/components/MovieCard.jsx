import React from 'react';
import { Link } from 'react-router-dom';

export const MovieCard = (props) => {
  const { data } = props;
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="mt-5 hover:scale-[0.95] cursor-pointer text-white w-[220px]">
        <img className="h-[350px]" src={data.Poster} alt={data.Title} />
        <h4 className="text-center">{data.Title}</h4>
        <p className="text-center">{data.Year}</p>
      </div>
    </Link>
  );
};
