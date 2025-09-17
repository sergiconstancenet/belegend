import React from 'react';

const SEOContent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-black text-black mb-8 text-center">
            Premium Fitness Apparel for Athletes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Why Choose Be Legend?</h3>
              <p className="text-gray-700 mb-4">
                Be Legend represents the pinnacle of fitness apparel design and functionality. 
                Our premium athletic wear is crafted for serious athletes who demand excellence 
                in every aspect of their training gear.
              </p>
              <p className="text-gray-700 mb-4">
                From moisture-wicking fabrics to ergonomic cuts, every piece in our collection 
                is engineered to enhance your performance while maintaining the style and 
                durability you expect from premium fitness wear.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• High-performance moisture-wicking technology</li>
                <li>• Durable construction for intense training</li>
                <li>• Ergonomic design for optimal movement</li>
                <li>• Premium materials sourced globally</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Our Collections</h3>
              <p className="text-gray-700 mb-4">
                Discover our comprehensive range of fitness apparel designed for every 
                aspect of your training routine. From high-intensity workouts to recovery 
                sessions, Be Legend has you covered.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-black">Training Essentials</h4>
                  <p className="text-gray-600 text-sm">
                    Core pieces for your daily training routine including tanks, tees, and shorts.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black">Performance Gear</h4>
                  <p className="text-gray-600 text-sm">
                    Advanced athletic wear with cutting-edge technology for peak performance.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black">Accessories</h4>
                  <p className="text-gray-600 text-sm">
                    Complete your setup with premium lifting straps, belts, and gym accessories.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4 text-center">
              Trusted by Athletes Worldwide
            </h3>
            <p className="text-gray-700 text-center">
              Join over 50,000 athletes in 15+ countries who trust Be Legend for their training needs. 
              Experience the difference that premium fitness apparel makes in your performance and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;