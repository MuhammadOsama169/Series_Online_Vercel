import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { MovieAndShowDetails } from './components/MovieAndShowDetails';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './store/userSlice';
import { MoviePage } from './pages/MoviePage';
import { SeriesPage } from './pages/SeriesPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          dispatch(loginSuccess(resObject.user));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/movie/:imdbID" element={<MovieAndShowDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
