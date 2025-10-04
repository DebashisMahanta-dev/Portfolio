// src/pages/Home/Home.js
import React from 'react';
import HeroSection from '../../sections/HeroSection/HeroSection';
import FeaturedProjects from '../../sections/FeaturedProjects/FeaturedProjects';
import styles from './Home.module.css'; // Create this CSS file

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* 1. The main impactful section */}
      <HeroSection />

     
      <FeaturedProjects />

      
    </div>
  );
};

export default Home;