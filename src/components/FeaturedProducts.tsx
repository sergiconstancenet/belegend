import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Essential Training Tee",
    price: 35,
    originalPrice: 45,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
    colors: ['Black', 'White', 'Grey'],
    isNew: true
  },
  {
    id: 2,
    name: "Performance Shorts",
    price: 55,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
    colors: ['Black', 'Navy', 'Charcoal'],
    isNew: false
  },
  {
    id: 3,
    name: "Legend Sports Bra",
    price: 45,
    originalPrice: 60,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400",
    colors: ['Black', 'White'],
    isNew: false
  },
  {
    id: 4,
    name: "Training Hoodie",
    price: 85,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400",
    colors: ['Black', 'Grey', 'White'],
    isNew: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
            New Arrivals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium fitness wear designed for peak performance
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10 bg-black text-white px-2 py-1 text-xs font-bold uppercase">
                    New
                  </div>
                )}
                
                <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-4 w-4 text-black" />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                <button className="absolute bottom-4 left-4 right-4 bg-black text-white py-2 text-sm font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Quick Add</span>
                </button>
              </div>

              <div className="px-2">
                <h3 className="text-black font-bold text-sm mb-2 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-black font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                  )}
                </div>

                <div className="flex space-x-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full border border-gray-300 ${
                        color === 'Black' ? 'bg-black' :
                        color === 'White' ? 'bg-white' :
                        color === 'Grey' ? 'bg-gray-400' :
                        color === 'Navy' ? 'bg-blue-900' :
                        'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;