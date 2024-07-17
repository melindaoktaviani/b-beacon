/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import BragaStreet from './pages/BragaStreet';
import Explore from './pages/Explore';
import Redeem from './pages/Redeem';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bragaStreet" element={<BragaStreet />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/redeem" element={<Redeem />} />
      </Routes>
    </Router>
  );
};

export default App;
