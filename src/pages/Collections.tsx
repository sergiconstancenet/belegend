import React, { useState } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const collections = [
  {
    id: 1,
    name: "Essential Training Tee",
    price: 35,
    originalPrice: 45,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Men",
    type: "Tops",
    colors: ['Black', 'White', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    onSale: true
  },
  {
    id: 2,
    name: "Performance Shorts",
    price: 55,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Men",
    type: "Bottoms",
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: false,
    onSale: false
  },
  {
    id: 3,
    name: "Legend Sports Bra",
    price: 45,
    originalPrice: 60,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Women",
    type: "Tops",
    colors: ['Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: false,
    onSale: true
  },
  {
    id: 4,
    name: "Training Hoodie",
    price: 85,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Men",
    type: "Outerwear",
    colors: ['Black', 'Grey', 'White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    onSale: false
  },
  {
    id: 5,
    name: "High-Waist Leggings",
    price: 65,
    originalPrice: 80,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Women",
    type: "Bottoms",
    colors: ['Black', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: false,
    onSale: true
  },
  {
    id: 6,
    name: "Premium Lifting Straps",
    price: 45,
    originalPrice: 60,
    image: "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Accessories",
    type: "Equipment",
    colors: ['Black'],
    sizes: ['One Size'],
    isNew: false,
    onSale: true
  }
];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Men', 'Women', 'Accessories'];
  const types = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Equipment'];

  const filteredProducts = collections.filter(product => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    if (selectedType !== 'All' && product.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-black mb-4">All Collections</h1>
          <p className="text-gray-600">Discover our complete range of premium fitness apparel</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 p-6">
              <h3 className="font-bold text-black mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-black mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-black mb-3">Type</h4>
                <div className="space-y-2">
                  {types.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={selectedType === type}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 text-sm focus:outline-none focus:border-black"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                {/* View Mode */}
                <div className="flex border border-gray-300">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-black'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-black'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map(product => (
                <div key={product.id} className="group bg-white border border-gray-200 hover:border-black transition-colors">
                  <div className="relative aspect-square overflow-hidden">
                    {product.isNew && (
                      <div className="absolute top-3 left-3 z-10 bg-black text-white px-2 py-1 text-xs font-bold">
                        NEW
                      </div>
                    )}
                    {product.onSale && (
                      <div className="absolute top-3 right-3 z-10 bg-gray-800 text-white px-2 py-1 text-xs font-bold">
                        SALE
                      </div>
                    )}
                    
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-black mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="font-bold text-black">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex space-x-1 mb-3">
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
                        />
                      ))}
                    </div>

                    <button className="w-full bg-black text-white py-2 font-bold hover:bg-gray-800 transition-colors">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;