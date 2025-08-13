import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle, 
  Mail, 
  Phone,
  Shield,
  Award,
  CreditCard,
  Clock
} from 'lucide-react';
import { mockPaymentMethods } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">P88</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Pulau<span className="text-yellow-400">88</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate gaming paradise with premium casino games, live dealers, and massive jackpots.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/games" className="text-gray-400 hover:text-yellow-400 transition-colors">Games</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-yellow-400 transition-colors">Promotions</Link></li>
              <li><Link to="/live-casino" className="text-gray-400 hover:text-yellow-400 transition-colors">Live Casino</Link></li>
              <li><Link to="/tournaments" className="text-gray-400 hover:text-yellow-400 transition-colors">Tournaments</Link></li>
              <li><Link to="/vip" className="text-gray-400 hover:text-yellow-400 transition-colors">VIP Club</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-gray-400 hover:text-yellow-400 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/responsible-gaming" className="text-gray-400 hover:text-yellow-400 transition-colors">Responsible Gaming</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
            </ul>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>support@pulau88.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MessageCircle className="w-4 h-4 mr-3" />
                <span>24/7 Live Chat</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>

          {/* Payment & Security */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Payment & Security</h3>
            
            {/* Payment methods */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">Accepted Payment Methods:</p>
              <div className="grid grid-cols-2 gap-2">
                {mockPaymentMethods.map((method) => (
                  <div key={method.id} className="bg-gray-800 p-3 rounded-lg flex items-center">
                    <span className="text-lg mr-2">{method.icon}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{method.name}</p>
                      <p className="text-gray-400 text-xs">{method.processingTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security badges */}
            <div className="space-y-3">
              <div className="flex items-center text-green-400">
                <Shield className="w-4 h-4 mr-3" />
                <span className="text-sm">SSL Encrypted</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Award className="w-4 h-4 mr-3" />
                <span className="text-sm">Licensed & Regulated</span>
              </div>
              <div className="flex items-center text-purple-400">
                <CreditCard className="w-4 h-4 mr-3" />
                <span className="text-sm">Secure Payments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Pulau88. All rights reserved. | 18+ Only | Play Responsibly
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Curacao Gaming License</span>
              <span>•</span>
              <span>RNG Certified</span>
              <span>•</span>
              <span>Fair Play Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;