import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedGames from '../components/FeaturedGames';
import GameCategories from '../components/GameCategories';
import PromotionsSection from '../components/PromotionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <FeaturedGames />
      <GameCategories />
      <PromotionsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;