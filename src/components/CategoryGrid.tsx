import React from 'react';

const categories = [
  {
    id: 1,
    title: "Men's Training",
    image: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#men"
  },
  {
    id: 2,
    title: "Women's Training",
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#women"
  },
  {
    id: 3,
    title: "Accessories",
    image: "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#accessories"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl md:text-3xl font-black mb-4">
                  {category.title}
                </h3>
                <button className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;