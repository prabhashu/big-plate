import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on taste. Every ingredient is carefully selected for maximum flavor.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We are proud to serve our local community and create a welcoming space for everyone.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every dish is plated with pride. Our team pours their heart into everything we create.'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-500">Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            More than just a restaurant—a celebration of good food, great company, and generous portions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="text-orange-500">"Big Plate"</span>?
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  It started with a simple idea: good food shouldn't be complicated, but it should be generous. We founded Big Plate with the mission to bring people together over meals that are hearty, flavorful, and memorable.
                </p>
                <p>
                  Located in the heart of our community, we combined our passion for fusion comfort food with a warm, welcoming environment. The orange in our logo represents our energy and the warmth of our kitchen.
                </p>
                <p>
                  When you dine with us, you aren't just a customer—<span className="text-orange-500 font-semibold">you're family</span>. Every meal is prepared with care, every guest is greeted with a smile, and every plate lives up to our name.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
                  alt="Beautiful plated dish"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-500 rounded-lg opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-orange-500">Philosophy</span>
            </h2>
            <p className="text-gray-400 text-lg">Three pillars that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-zinc-900 border-orange-500/20 p-8 text-center hover:border-orange-500 transition-all hover:transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/10 rounded-full mb-6">
                    <Icon size={40} className="text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Behind every great meal is a passionate team. Our chefs, servers, and staff work together to ensure your experience is nothing short of exceptional. From the kitchen to your table, we're dedicated to making every visit special.
            </p>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg" 
                alt="Restaurant dining room"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Come Say Hi to the Team!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We'd love to meet you. Visit us and experience the Big Plate difference.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-10 py-6 text-lg">
              Find Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;