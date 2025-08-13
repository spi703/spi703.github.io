import React from 'react';
import { mockCategories } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const GameCategories = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Game Categories
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our diverse collection of premium casino games
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockCategories.map((category) => (
            <Link key={category.id} to={`/games/${category.id}`}>
              <Card className="group relative overflow-hidden bg-gray-700 border-gray-600 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Category Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                  </div>

                  {/* Game Count */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-blue-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                      <span className="text-white text-sm font-bold">{category.gameCount} games</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-medium text-sm">
                      {category.gameCount} Games Available
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/games">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all duration-300"
            >
              Explore All Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;