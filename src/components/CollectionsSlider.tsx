import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: "URBAN LEGENDS",
    subtitle: "Street Ready Performance",
    quote: "NO LIMITS",
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "HARDCORE EDITION",
    subtitle: "For the Relentless",
    quote: "LEGENDARY FIT",
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "ELITE SERIES",
    subtitle: "Championship Mindset",
    quote: "BE MORE",
    image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1200",
  }
];

const CollectionsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            SIGNATURE <span className="text-gray-600">COLLECTIONS</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {collections.map((collection) => (
                <div key={collection.id} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[21/9] lg:aspect-[21/7] relative overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-white/70"></div>
                    
                    <div className="absolute inset-0 flex items-center">
                      <div className="max-w-2xl mx-auto text-center px-4">
                        <div className="text-gray-400 font-black text-6xl sm:text-8xl lg:text-9xl opacity-30 mb-4">
                          {collection.quote}
                        </div>
                        <h3 className="text-3xl sm:text-5xl font-black text-black mb-4">
                          {collection.title}
                        </h3>
                        <p className="text-xl text-gray-700 mb-8">{collection.subtitle}</p>
                        <button className="bg-black hover:bg-gray-800 text-white font-black px-8 py-3 transition-all duration-300 hover:scale-105">
                          SHOP COLLECTION
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all duration-300 border border-gray-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all duration-300 border border-gray-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {collections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-black' : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSlider;