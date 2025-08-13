import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Play, Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Welcome to Pulau88",
      subtitle: "Your Ultimate Gaming Paradise",
      description: "Experience the thrill of premium casino games with massive jackpots and live dealers.",
      cta: "Start Playing",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop"
    },
    {
      title: "Live Casino Experience",
      subtitle: "Real Dealers, Real Wins",
      description: "Join live tables with professional dealers for an authentic casino experience.",
      cta: "Play Live Now",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    },
    {
      title: "Mega Jackpots Await",
      subtitle: "Win Life-Changing Prizes",
      description: "Progressive jackpots worth millions waiting for the next lucky winner.",
      cta: "Join Now",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={currentSlideData.image}
          alt="Casino background"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo animation */}
          <div className="mb-8 animate-pulse">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <span className="text-3xl font-bold text-white">P88</span>
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {currentSlideData.title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">
            {currentSlideData.subtitle}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {currentSlideData.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">50K+</span>
              </div>
              <p className="text-gray-400 text-sm">Active Players</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">$2.4M</span>
              </div>
              <p className="text-gray-400 text-sm">Biggest Jackpot</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Play className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-400 text-sm">Games Available</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-white">4.9</span>
              </div>
              <p className="text-gray-400 text-sm">User Rating</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/games">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                {currentSlideData.cta}
              </Button>
            </Link>
            <Link to="/promotions">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg rounded-full font-bold transform hover:scale-105 transition-all duration-300"
              >
                View Bonuses
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-400 w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;