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
import GrayArtGallery from './pages/GrayArtGallery';
import QRCodeScanner from './pages/QRCodeScanner';
import WelcomeScreen from './pages/WelcomeScreen';
import OrchidForest from './pages/OrchidForest';
import LoginPage from './pages/LoginPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bragaStreet" element={<BragaStreet />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/grayArtGallery" element={<GrayArtGallery />} />
        <Route path="/QRCodeScanner" element={<QRCodeScanner />} />
        <Route path="/welcomeScreen" element={<WelcomeScreen />} />
        <Route path="/orchidForest" element={<OrchidForest />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
