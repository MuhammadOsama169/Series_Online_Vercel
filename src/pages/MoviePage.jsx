/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MovieList } from '../components/MoviesList';
import { Header } from '../components/Header';
import useMediaQuery from '../hooks/useMediaQuery';
import Sidebar from '../components/SideBar';

export const MoviePage = () => {
  const isAboveSmallScreens = useMediaQuery('(min-width:850px)');
  const [tabvalue, setTabValue] = React.useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleTabsChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div>
        {isOpen === true && isAboveSmallScreens ? <Sidebar /> : <></>}
        <main className={isOpen && isAboveSmallScreens ? 'ml-64' : 'ml-0'}>
          <MovieList />
        </main>
      </div>
    </>
  );
};
