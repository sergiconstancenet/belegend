import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Legend Tank Pro",
    price: 89,
    originalPrice: 109,
    rating: 5,
    reviews: 234,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Elite Training Shorts",
    price: 75,
    originalPrice: 95,
    rating: 5,
    reviews: 189,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "LIMITED"
  },
  {
    id: 3,
    name: "Premium Lifting Straps",
    price: 45,
    originalPrice: 60,
    rating: 4,
    reviews: 156,
    image: "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "NEW"
  },
  {
    id: 4,
    name: "Legendary Hoodie",
    price: 125,
    originalPrice: 150,
    rating: 5,
    reviews: 298,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "BESTSELLER"
  }
];

const BestSellers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            BEST <span className="text-gray-600">SELLERS</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Los productos más elegidos por atletas de élite en todo el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white hover:bg-gray-50 transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="relative aspect-square overflow-hidden">
                {/* Badge */}
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-black ${
                  product.badge === 'BESTSELLER' ? 'bg-black text-white' :
                  product.badge === 'LIMITED' ? 'bg-gray-800 text-white' :
                  'bg-gray-600 text-white'
                }`}>
                  {product.badge}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Quick Buy Overlay */}
                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-black hover:bg-gray-800 text-white font-black px-6 py-3 flex items-center space-x-2 transition-all duration-300">
                    <ShoppingCart className="h-5 w-5" />
                    <span>QUICK BUY</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? 'text-black fill-current' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-black text-black">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <button className="w-full border border-black text-black hover:bg-black hover:text-white py-3 font-bold transition-all duration-300">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black hover:bg-gray-800 text-white font-black px-12 py-4 text-lg transition-all duration-300 hover:scale-105">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;