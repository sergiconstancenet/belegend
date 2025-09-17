import React from 'react';
import { Shield, Truck, RotateCcw, Headphones, Star } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "256-bit SSL encryption protects your data"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $75"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert customer service team"
  }
];

const reviews = [
  { stars: 5, count: 2847, text: "Excellent" },
  { stars: 4, count: 892, text: "Good" },
  { stars: 3, count: 156, text: "Average" },
  { stars: 2, count: 43, text: "Poor" },
  { stars: 1, count: 12, text: "Terrible" }
];

const TrustSignals = () => {
  const totalReviews = reviews.reduce((sum, review) => sum + review.count, 0);
  const averageRating = (
    reviews.reduce((sum, review) => sum + (review.stars * review.count), 0) / totalReviews
  ).toFixed(1);

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <feature.icon className="h-8 w-8 text-black mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-black mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Reviews Summary */}
        <div className="bg-gray-50 p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-black fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-black">{averageRating}</span>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">{totalReviews.toLocaleString()}</span> verified reviews
          </p>
          <p className="text-gray-600 text-sm">
            Join thousands of satisfied customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;