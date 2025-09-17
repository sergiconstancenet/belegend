import React from 'react';
import { Target, Award, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Performance First",
    description: "Every piece is engineered for peak athletic performance and durability."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest materials and construction techniques."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by athletes, for athletes. Join thousands who trust Be Legend."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing boundaries in fitness apparel technology."
  }
];

const BrandStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-black mb-6">
              More Than Apparel.<br />
              <span className="text-gray-600">It's a Movement.</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Be Legend was born from the belief that greatness isn't given—it's earned. 
              Every thread, every stitch, every design choice is made with one purpose: 
              to help you become the legend you're meant to be.
            </p>
            <p className="text-gray-600 mb-8">
              From our headquarters to gyms worldwide, we're building a community of 
              athletes who refuse to settle for ordinary. Join the movement.
            </p>
            <button className="bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors">
              Our Story
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 text-center group hover:bg-gray-100 transition-colors">
                <value.icon className="h-12 w-12 text-black mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-black mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;