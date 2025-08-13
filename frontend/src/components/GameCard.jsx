import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, Star, Heart, Trophy, Zap, Flame } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const GameCard = ({ game, featured = false }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handlePlay = () => {
    toast({
      title: "Game Loading...",
      description: `Starting ${game.name}. Good luck!`,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from favorites" : "Added to favorites",
      description: `${game.name} ${isLiked ? 'removed from' : 'added to'} your favorites`,
    });
  };

  return (
    <Card 
      className={`group relative overflow-hidden bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 ${
        featured ? 'ring-2 ring-yellow-400/20' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={game.image} 
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={handlePlay}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full w-16 h-16 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
            >
              <Play className="w-6 h-6 ml-1" />
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {game.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600 text-white font-bold">
              <Zap className="w-3 h-3 mr-1" />
              NEW
            </Badge>
          )}
          {game.isHot && (
            <Badge className="bg-red-500 hover:bg-red-600 text-white font-bold">
              <Flame className="w-3 h-3 mr-1" />
              HOT
            </Badge>
          )}
        </div>

        {/* Like button */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>

        {/* Jackpot badge */}
        {game.jackpot && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
              <Trophy className="w-3 h-3 mr-1" />
              {game.jackpot}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
              {game.name}
            </h3>
            <p className="text-sm text-gray-400">{game.provider}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-300">{game.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="border-gray-600 text-gray-300">
            {game.category.replace('-', ' ').toUpperCase()}
          </Badge>
          <Button 
            onClick={handlePlay}
            size="sm"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-medium"
          >
            Play Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;