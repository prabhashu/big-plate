import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Users, Truck, ChefHat } from 'lucide-react';
import { services } from '../mockData';

const iconMap = {
  users: Users,
  truck: Truck,
  chefHat: ChefHat
};

const Services = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
            alt="Restaurant Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience Big Plate
            <br />
            <span className="text-orange-500">Your Way</span>
          </h1>
          <p className="text-xl text-gray-300">Private dining, catering, and delivery services</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-6">
                    <Icon size={32} className="text-orange-500" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <h3 className="text-2xl text-orange-500 font-semibold mb-6">
                    {service.subtitle}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  {service.title === 'Takeout & Delivery' && (
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg">
                      Order Online
                    </Button>
                  )}
                  {service.title !== 'Takeout & Delivery' && (
                    <Link to="/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg">
                        Get in Touch
                      </Button>
                    </Link>
                  )}
                </div>
                <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative z-10 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-64 h-64 bg-orange-500 rounded-lg opacity-20 blur-3xl`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services Cards */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-orange-500">Big Plate</span>?
            </h2>
            <p className="text-gray-400 text-lg">Professional service for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-orange-500/20 p-8 text-center hover:border-orange-500 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Customizable Menus</h3>
              <p className="text-gray-400">Tailor your menu to match your event's theme, dietary needs, and budget.</p>
            </Card>
            <Card className="bg-zinc-900 border-orange-500/20 p-8 text-center hover:border-orange-500 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Staff</h3>
              <p className="text-gray-400">Our experienced team ensures flawless service from start to finish.</p>
            </Card>
            <Card className="bg-zinc-900 border-orange-500/20 p-8 text-center hover:border-orange-500 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Fresh & Delicious</h3>
              <p className="text-gray-400">We use the same quality ingredients for catering as we do in our restaurant.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your catering needs and let us make your event unforgettable.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-10 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;