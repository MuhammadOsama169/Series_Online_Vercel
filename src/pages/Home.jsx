import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieListing } from '../components/MovieListing';
import { SeriesListing } from '../components/SeriesListing';
import { MovieList } from '../components/MoviesList';
import { Header } from '../components/Header';
import useMediaQuery from '../hooks/useMediaQuery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Sidebar from '../components/SideBar';

export const Home = () => {
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
          <MovieListing />

          <div className="w-full text-left py-10 px-12">
            <h1 className="text-[25px] text-white font-opensans">Trending</h1>
          </div>
          <Tabs
            className="px-10"
            onChange={handleTabsChange}
            value={tabvalue}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#00FF00',
              },
            }}
          >
            <Tab
              label="TV Series"
              sx={{ color: 'white', '&.Mui-selected': { color: '#00FF00' } }}
            ></Tab>
            <Tab
              label="Movies"
              sx={{ color: 'white', '&.Mui-selected': { color: '#00FF00' } }}
            ></Tab>
          </Tabs>
          {tabvalue === 0 && <SeriesListing />}
          {tabvalue === 1 && <MovieList />}
        </main>
      </div>
    </>
  );
};
Home.propTypes = {
  isOpen: PropTypes.bool,
};
