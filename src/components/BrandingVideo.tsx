import React from 'react';

const BrandingVideo = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Video Container */}
          <div className="aspect-video relative overflow-hidden bg-white">
            <img
              src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Be Legend Lifestyle"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-white/60"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
              </button>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-black z-10">
              <h2 className="text-4xl sm:text-6xl font-black mb-4">
                NO ES ROPA
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black text-gray-600 mb-6">
                ES UN LEGADO
              </h3>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto">
                Cada fibra cuenta una historia. Cada diseño forja un destino.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center">
          <div className="group">
            <div className="text-4xl font-black text-black mb-2 group-hover:scale-110 transition-transform">
              50K+
            </div>
            <div className="text-gray-700 font-medium">Athletes Trust Us</div>
          </div>
          <div className="group">
            <div className="text-4xl font-black text-black mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-gray-700 font-medium">Countries Worldwide</div>
          </div>
          <div className="group">
            <div className="text-4xl font-black text-black mb-2 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-gray-700 font-medium">Customer Satisfaction</div>
          </div>
          <div className="group">
            <div className="text-4xl font-black text-black mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-gray-700 font-medium">Premium Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingVideo;