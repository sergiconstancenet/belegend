import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Shop */}
          <div>
            <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wide">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors text-sm">Men</a></li>
              <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors text-sm">Women</a></li>
              <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors text-sm">Accessories</a></li>
              <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors text-sm">Sale</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wide">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Shipping</a></li>
              <li><a href="/returns" className="text-gray-600 hover:text-black transition-colors text-sm">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Sustainability</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wide">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h3 className="text-xl font-black text-black mr-8">BE LEGEND</h3>
            <p className="text-gray-600 text-sm">
              © 2024 Be Legend. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy</a>
            <a href="/terms" className="text-gray-600 hover:text-black transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;