/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Stats from '../components/Stats';
import PopularDestinations from '../components/PopularDestinations';
import ExploreSection from '../components/ExploreSection';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Carousel />
      <Services />
      <Stats />
      <PopularDestinations />
      <ExploreSection />
    </Layout>
  );
};

export default HomePage;
