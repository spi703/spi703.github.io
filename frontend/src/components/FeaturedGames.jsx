import React from 'react';
import { mockGames } from '../data/mock';
import GameCard from './GameCard';
import { Button } from './ui/button';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedGames = () => {
  const featuredGames = mockGames.filter(game => game.isHot || game.isNew).slice(0, 6);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Flame className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Games
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the hottest games with the biggest wins and most exciting gameplay
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} featured={true} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/games">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              View All Games
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;