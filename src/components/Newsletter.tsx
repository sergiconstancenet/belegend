import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Join the Legend Community
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Be the first to know about new drops, exclusive offers, and fitness inspiration
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;