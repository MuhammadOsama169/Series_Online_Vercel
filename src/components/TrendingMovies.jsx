import React from 'react';

export const TrendingMovies = (props) => {
  const { data } = props;
  console.log({ data });
  return (
    <div className="mt-5 hover:scale-[0.95] cursor-pointer text-white w-[220px]">
      <img className="h-[350px]" src={data.Poster} alt={data.title} />
      <h4 className="text-center">{data.title}</h4>
      <p className="text-center">{data.Year}</p>
    </div>
  );
};
