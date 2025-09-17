import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-black text-black tracking-tight">BE LEGEND</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide">Men</a>
              <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide">Women</a>
              <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide">Accessories</a>
              <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide">Sale</a>
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-black hover:text-gray-600 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-black hover:text-gray-600 cursor-pointer transition-colors" />
            <Heart className="h-5 w-5 text-black hover:text-gray-600 cursor-pointer transition-colors" />
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-black hover:text-gray-600 cursor-pointer transition-colors" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">0</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-black" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">0</span>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/collections" className="text-black block px-3 py-2 text-sm font-medium uppercase tracking-wide hover:text-gray-600">Men</a>
            <a href="/collections" className="text-black block px-3 py-2 text-sm font-medium uppercase tracking-wide hover:text-gray-600">Women</a>
            <a href="/collections" className="text-black block px-3 py-2 text-sm font-medium uppercase tracking-wide hover:text-gray-600">Accessories</a>
            <a href="/collections" className="text-black block px-3 py-2 text-sm font-medium uppercase tracking-wide hover:text-gray-600">Sale</a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <Search className="h-5 w-5 text-black" />
              <User className="h-5 w-5 text-black" />
              <Heart className="h-5 w-5 text-black" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;