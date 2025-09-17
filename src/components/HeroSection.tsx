import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Main Hero */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Be Legend Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              TRAIN<br />DIFFERENT
            </h1>
            <p className="text-lg md:text-xl mb-8 font-medium">
              Premium fitness wear for those who refuse to be ordinary
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <button className="w-full md:w-auto bg-white text-black px-8 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors">
                Shop Men
              </button>
              <button className="w-full md:w-auto bg-transparent border-2 border-white text-white px-8 py-3 font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                Shop Women
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 md:space-x-16 text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wide">
            <div className="text-center">
              <span className="block font-black text-black">Free Shipping</span>
              <span>Orders over $75</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-black">30 Day Returns</span>
              <span>Easy returns</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-black">Premium Quality</span>
              <span>Built to last</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;