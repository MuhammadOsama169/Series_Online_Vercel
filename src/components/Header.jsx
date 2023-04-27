import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import { fetchMovies } from '../store/movieSlice';
import { fetchSeries } from '../store/seriesSlice';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import CloseIcon from '../assets/close-icon.svg';
import { Footer } from './Footer';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
const variants2 = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export const Header = ({ isOpen, setIsOpen }) => {
  const isAboveSmallScreens = useMediaQuery('(min-width:850px)');
  const [isMenuToggled, setIsMediaToggled] = useState(false);

  const username = useSelector((state) => state?.users?.userDetails);

  const [term, setTerm] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(term));
    dispatch(fetchSeries(term));
  };

  const handleClickHome = () => {
    navigate('/');
  };
  const handleSignIn = () => {
    navigate('/login');
  };
  const handleSignOut = () => {
    navigate('/');
    dispatch(logout({}));
  };

  const toggleHamburgerBtn = () => {
    setIsOpen((current) => !current);
  };

  return (
    <nav className="flex z-10 sticky top-0 bg-[#282828] text-white md:h-[100px] ">
      {/* Desktop */}

      {isAboveSmallScreens ? (
        <div className="flex font-semibold text-base w-full m-auto ">
          <div className="flex md:flex-row flex-col items-center  px-5">
            {isOpen === true ? (
              <motion.nav
                animate={isOpen ? 'open' : 'closed'}
                variants={variants}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={toggleHamburgerBtn}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.nav>
            ) : (
              <motion.nav
                animate={isOpen ? 'closed' : 'open'}
                variants={variants2}
                transition={{ delay: 1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={toggleHamburgerBtn}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </motion.nav>
            )}

            <Link to={`/`}>
              <img src={logo} className="px-5 w-[200px] md:py-0 py-5" />
            </Link>

            <div className="flex m-auto w-full ml-[100px]">
              <form onSubmit={handleInputChange}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="grey"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Movies"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                </div>
              </form>

              <div className="flex m-auto justify-end md:ml-[700px]">
                <div className="flex gap-5 ">
                  <button
                    onClick={handleClickHome}
                    to={'/'}
                    className="font-opensans text-lg"
                  >
                    Home
                  </button>
                  {username || username?.aud ? (
                    <div className="backdrop-filter backdrop-blur-lg flex">
                      <button
                        className="font-opensans text-lg"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                      <img
                        src={username?.photos[0].value}
                        className="rounded-full h-8 w-8 object-cover ml-4"
                        alt=""
                      />
                    </div>
                  ) : (
                    <button
                      className="font-opensans text-lg"
                      onClick={handleSignIn}
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[100px] mx-auto justify-center items-center">
          <Link to={`/`}>
            <img src={logo} className="px-5 w-[200px] md:py-0 py-5" />
          </Link>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
              onClick={() => setIsMediaToggled(!isMenuToggled)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Mobile View */}

      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-[#222222] w-[200px] ss:w-[300px] ">
          {/* Close Icon */}

          <div className="flex justify-end p-12">
            <button onClick={() => setIsMediaToggled(!isMenuToggled)}>
              <img className=" h-[40px]" alt="close icon" src={CloseIcon} />
            </button>
          </div>

          <motion.div
            initial={{ x: '100%' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          >
            <div className="flex flex-col gap-10 ml-[25%] text-2xl text-white">
              {/* MENU ITEMS */}
              <form
                onSubmit={handleInputChange}
                className="flex justify-center m-auto"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="grey"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Movies"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                </div>
              </form>
              {username || username?.aud ? (
                <div className="backdrop-filter backdrop-blur-lg flex">
                  <button
                    className="font-opensans text-lg"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                  <img
                    src={username?.photos[0].value}
                    className="rounded-full h-8 w-8 object-cover ml-4"
                    alt=""
                  />
                </div>
              ) : (
                <button
                  className="font-opensans text-lg"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              )}
              <Footer />
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};
