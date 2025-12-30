import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Leaf, Utensils, Heart, ArrowRight } from 'lucide-react';
import { features, menuItems } from '../mockData';

const iconMap = {
  leaf: Leaf,
  utensils: Utensils,
  heart: Heart
};

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Bring Your Appetite.
            <br />
            <span className="text-orange-500">We'll Handle the Rest.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Welcome to Big Plate. Big flavors, fresh ingredients, and portions that never disappoint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg">
                View Our Menu
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-6 text-lg">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Just a <span className="text-orange-500">Meal</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Big Plate, we believe food should be a celebration. Whether you're grabbing a quick lunch or settling in for a family dinner, we promise an experience that satisfies. We serve fusion comfort food—from gourmet burgers to grilled steaks to fresh pasta—made with love and served with a smile.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card key={index} className="bg-zinc-900 border-orange-500/20 p-8 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-6">
                    <Icon size={32} className="text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-orange-500">Signature</span> Dishes
            </h2>
            <p className="text-gray-400 text-lg">Prepared fresh, served with pride</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuItems.mains.filter(item => item.featured).map((dish) => (
              <Card key={dish.id} className="bg-zinc-900 border-orange-500/20 overflow-hidden group hover:border-orange-500 transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{dish.name}</h3>
                  <p className="text-gray-400 mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">${dish.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg group">
                View Full Menu
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Big Plate?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table now and discover why our guests keep coming back for more.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-10 py-6 text-lg">
              Book Your Table
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;