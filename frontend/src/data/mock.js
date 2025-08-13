// Mock data for Pulau88 gaming platform

export const mockGames = [
  {
    id: 1,
    name: "Mega Fortune",
    category: "slots",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=300&fit=crop",
    provider: "NetEnt",
    jackpot: "$2.4M",
    rating: 4.8,
    isNew: false,
    isHot: true
  },
  {
    id: 2,
    name: "Lightning Roulette",
    category: "live-casino",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    provider: "Evolution Gaming",
    jackpot: null,
    rating: 4.9,
    isNew: true,
    isHot: true
  },
  {
    id: 3,
    name: "Blackjack Pro",
    category: "table-games",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    provider: "Pragmatic Play",
    jackpot: null,
    rating: 4.7,
    isNew: false,
    isHot: false
  },
  {
    id: 4,
    name: "Dragon Tiger",
    category: "live-casino",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    provider: "Asia Gaming",
    jackpot: null,
    rating: 4.6,
    isNew: false,
    isHot: true
  },
  {
    id: 5,
    name: "Starburst",
    category: "slots",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    provider: "NetEnt",
    jackpot: "$125K",
    rating: 4.5,
    isNew: false,
    isHot: false
  },
  {
    id: 6,
    name: "Texas Hold'em",
    category: "poker",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    provider: "PokerStars",
    jackpot: null,
    rating: 4.8,
    isNew: true,
    isHot: false
  }
];

export const mockPromotions = [
  {
    id: 1,
    title: "Welcome Bonus",
    description: "Get 100% match bonus up to $500 on your first deposit",
    image: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?w=600&h=400&fit=crop",
    bonus: "100% up to $500",
    validUntil: "2025-12-31",
    code: "WELCOME100",
    isNew: true
  },
  {
    id: 2,
    title: "Free Spins Friday",
    description: "Get 50 free spins every Friday on selected slot games",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop",
    bonus: "50 Free Spins",
    validUntil: "2025-08-30",
    code: "FRIDAY50",
    isNew: false
  },
  {
    id: 3,
    title: "Live Casino Cashback",
    description: "Get 10% cashback on all live casino losses",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=400&fit=crop",
    bonus: "10% Cashback",
    validUntil: "2025-09-15",
    code: "LIVECASH10",
    isNew: true
  }
];

export const mockCategories = [
  {
    id: "slots",
    name: "Slots",
    icon: "🎰",
    description: "Spin to win with hundreds of slot games",
    gameCount: 250,
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=200&fit=crop"
  },
  {
    id: "live-casino",
    name: "Live Casino",
    icon: "🎲",
    description: "Real dealers, real-time gaming experience",
    gameCount: 45,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
  },
  {
    id: "table-games",
    name: "Table Games",
    icon: "♠️",
    description: "Classic casino table games",
    gameCount: 30,
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=200&fit=crop"
  },
  {
    id: "poker",
    name: "Poker",
    icon: "♥️",
    description: "Tournament and cash game poker",
    gameCount: 15,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop"
  }
];

export const mockUser = {
  id: 1,
  username: "player123",
  email: "player@example.com",
  balance: 1250.50,
  isLoggedIn: false,
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  vipLevel: "Gold",
  totalWins: 25430.75,
  gamesPlayed: 1240
};

export const mockPaymentMethods = [
  { id: 1, name: "Credit Card", icon: "💳", processingTime: "Instant" },
  { id: 2, name: "Bitcoin", icon: "₿", processingTime: "5-10 mins" },
  { id: 3, name: "PayPal", icon: "🏦", processingTime: "Instant" },
  { id: 4, name: "Bank Transfer", icon: "🏛️", processingTime: "1-3 days" }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Amazing platform! The live dealers are professional and the payouts are fast.",
    game: "Live Blackjack",
    winAmount: "$2,500"
  },
  {
    id: 2,
    name: "Maria Santos",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b798?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Love the slot games here. Hit the jackpot on Mega Fortune last week!",
    game: "Mega Fortune",
    winAmount: "$15,000"
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    comment: "Great variety of games and excellent customer support. Highly recommended!",
    game: "Poker Tournament",
    winAmount: "$5,200"
  }
];