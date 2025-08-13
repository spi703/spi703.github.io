import React from 'react';
import { mockPromotions } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Gift, Clock, Copy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';

const PromotionsSection = () => {
  const { toast } = useToast();

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied!",
      description: `Promo code ${code} copied to clipboard`,
    });
  };

  const handleClaimBonus = (promotion) => {
    toast({
      title: "Bonus Claimed!",
      description: `${promotion.title} has been added to your account`,
    });
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Exclusive Promotions
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Boost your gaming experience with our amazing bonuses and offers
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockPromotions.map((promotion) => (
            <Card key={promotion.id} className="group relative overflow-hidden bg-gray-800 border-gray-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={promotion.image} 
                  alt={promotion.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* New badge */}
                {promotion.isNew && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white font-bold">
                      NEW
                    </Badge>
                  </div>
                )}

                {/* Bonus amount */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full">
                    <span className="text-white font-bold text-lg">{promotion.bonus}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {promotion.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {promotion.description}
                </p>

                {/* Promo code */}
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg mb-4">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Promo Code</span>
                    <p className="text-yellow-400 font-bold">{promotion.code}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopyCode(promotion.code)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-600"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                {/* Valid until */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Valid until {new Date(promotion.validUntil).toLocaleDateString()}
                </div>

                {/* Claim button */}
                <Button 
                  onClick={() => handleClaimBonus(promotion)}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold"
                >
                  Claim Bonus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/promotions">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              View All Promotions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;