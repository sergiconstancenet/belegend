import React from 'react';
import { Instagram, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Professional Athlete",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Be Legend no es solo ropa, es una mentalidad. Cada prenda me recuerda que puedo ser más de lo que era ayer.",
    rating: 5,
    product: "Elite Training Set"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Fitness Influencer",
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "La calidad es increíble. Me siento poderosa y cómoda en cada entrenamiento. Definitivamente mi marca favorita.",
    rating: 5,
    product: "Legend Sports Bra"
  },
  {
    id: 3,
    name: "Alex Thompson",
    role: "CrossFit Champion",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Resistencia, comodidad y estilo. Be Legend entiende lo que necesitamos los atletas serios.",
    rating: 5,
    product: "Hardcore Collection"
  }
];

const ugcImages = [
  "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg?auto=compress&cs=tinysrgb&w=300"
];

const Community = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            LEGENDS <span className="text-gray-600">COMMUNITY</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Únete a miles de atletas que ya forman parte del movimiento. Comparte tu historia con #BeLegend
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 group hover:bg-gray-100 transition-all duration-300 border border-gray-200">
              <Quote className="h-8 w-8 text-black mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-black font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-800 text-sm font-medium">{testimonial.product}</p>
                </div>
              </div>

              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-black"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Generated Content */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-black mb-2">
            TAG <span className="text-gray-600">#BELEGEND</span>
          </h3>
          <p className="text-gray-700">Comparte tu estilo y inspira a otros legends</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {ugcImages.map((image, index) => (
            <div key={index} className="aspect-square relative overflow-hidden group cursor-pointer border border-gray-200">
              <img
                src={image}
                alt={`Community post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-black" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black hover:bg-gray-800 text-white font-black px-12 py-4 text-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto space-x-2">
            <Instagram className="h-6 w-6" />
            <span>ÚNETE AL MOVIMIENTO</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;