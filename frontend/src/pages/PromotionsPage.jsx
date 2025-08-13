import React, { useState } from 'react';
import { mockPromotions } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Gift, Clock, Copy, Zap, Star, Trophy, Calendar } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const PromotionsPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('all');

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

  const activePromotions = mockPromotions.filter(promo => new Date(promo.validUntil) > new Date());
  const newPromotions = mockPromotions.filter(promo => promo.isNew);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-green-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Promotions & Bonuses
            </h1>
            <Trophy className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Maximize your gaming experience with our exclusive bonuses, free spins, and special offers
          </p>
        </div>

        {/* Hero Promotion */}
        <div className="mb-12">
          <Card className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-yellow-400 text-black font-bold mb-4">
                    <Zap className="w-4 h-4 mr-1" />
                    LIMITED TIME
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Welcome Mega Bonus
                  </h2>
                  <p className="text-xl text-green-100 mb-6">
                    Get 200% match bonus up to $1,000 + 100 free spins on your first deposit!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                      onClick={() => handleClaimBonus({ title: 'Welcome Mega Bonus' })}
                    >
                      Claim Now
                    </Button>
                    <div className="flex items-center text-green-100">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Ends in 7 days</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-bold text-yellow-400">
                    200%
                  </div>
                  <div className="text-2xl text-white font-bold">
                    BONUS MATCH
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Promotion Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
              All Promotions
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Active Offers
            </TabsTrigger>
            <TabsTrigger value="new" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              New Promotions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <PromotionGrid promotions={mockPromotions} onCopyCode={handleCopyCode} onClaimBonus={handleClaimBonus} />
          </TabsContent>

          <TabsContent value="active">
            <PromotionGrid promotions={activePromotions} onCopyCode={handleCopyCode} onClaimBonus={handleClaimBonus} />
          </TabsContent>

          <TabsContent value="new">
            <PromotionGrid promotions={newPromotions} onCopyCode={handleCopyCode} onClaimBonus={handleClaimBonus} />
          </TabsContent>
        </Tabs>

        {/* VIP Program Teaser */}
        <Card className="bg-gradient-to-r from-purple-800 to-pink-800 border-0 mb-12">
          <CardContent className="p-8 text-center">
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our VIP Program
            </h3>
            <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
              Unlock exclusive bonuses, faster withdrawals, personal account manager, and special events
            </p>
            <Button 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8"
            >
              Learn More About VIP
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const PromotionGrid = ({ promotions, onCopyCode, onClaimBonus }) => {
  if (promotions.length === 0) {
    return (
      <div className="text-center py-20">
        <Gift className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">No promotions found</h3>
        <p className="text-gray-400">Check back soon for new offers!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {promotions.map((promotion) => (
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
                  <Zap className="w-3 h-3 mr-1" />
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
                onClick={() => onCopyCode(promotion.code)}
                className="border-gray-600 text-gray-300 hover:bg-gray-600"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>

            {/* Valid until */}
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Valid until {new Date(promotion.validUntil).toLocaleDateString()}
            </div>

            {/* Claim button */}
            <Button 
              onClick={() => onClaimBonus(promotion)}
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold"
            >
              Claim Bonus
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PromotionsPage;