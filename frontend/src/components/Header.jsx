import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Menu,
  X,
  Gamepad2,
  Gift,
  Trophy,
  User,
  Wallet,
  LogIn,
  UserPlus
} from 'lucide-react';
import { mockUser } from '../data/mock';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(mockUser);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegister = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (userData) => {
    setUser({ ...user, ...userData, isLoggedIn: true });
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">P88</span>
              </div>
              <span className="text-2xl font-bold text-white hidden sm:block">
                Pulau<span className="text-yellow-400">88</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-yellow-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/games"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/games') 
                    ? 'text-yellow-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Games</span>
              </Link>
              <Link
                to="/promotions"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/promotions') 
                    ? 'text-yellow-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Gift className="w-4 h-4" />
                <span>Promotions</span>
              </Link>
            </nav>

            {/* User Section */}
            <div className="flex items-center space-x-4">
              {user.isLoggedIn ? (
                <div className="hidden md:flex items-center space-x-4">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-lg">
                    <Wallet className="w-4 h-4 text-green-400" />
                    <span className="text-white font-medium">${user.balance.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img 
                      src={user.avatar} 
                      alt={user.username}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-white font-medium">{user.username}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleLogout}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleLogin}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button 
                    size="sm"
                    onClick={handleRegister}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-medium"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-yellow-400 bg-gray-700' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Trophy className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/games"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/games') 
                    ? 'text-yellow-400 bg-gray-700' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Gamepad2 className="w-5 h-5" />
                <span>Games</span>
              </Link>
              <Link
                to="/promotions"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/promotions') 
                    ? 'text-yellow-400 bg-gray-700' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Gift className="w-5 h-5" />
                <span>Promotions</span>
              </Link>
              
              {/* Mobile auth buttons */}
              <div className="pt-4 border-t border-gray-700">
                {user.isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <img 
                        src={user.avatar} 
                        alt={user.username}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-white font-medium">{user.username}</p>
                        <p className="text-green-400 text-sm">${user.balance.toFixed(2)}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleLogout}
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button 
                      variant="outline"
                      onClick={handleLogin}
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                    <Button 
                      onClick={handleRegister}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-medium"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Header;