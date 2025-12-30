import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantInfo, saveReservation } from '../mockData';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      saveReservation(formData);
      toast.success('Reservation confirmed! We\'ll contact you shortly.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        requests: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg" 
            alt="Restaurant Contact"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">Visit us or book your table today</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Visit <span className="text-orange-500">Us</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <Card className="bg-zinc-900 border-orange-500/20 p-6 hover:border-orange-500 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <MapPin className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-400">{restaurantInfo.address}</p>
                      <p className="text-gray-400">{restaurantInfo.city}</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-zinc-900 border-orange-500/20 p-6 hover:border-orange-500 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <Phone className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                      <a href={`tel:${restaurantInfo.phone}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                        {restaurantInfo.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="bg-zinc-900 border-orange-500/20 p-6 hover:border-orange-500 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <Mail className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <a href={`mailto:${restaurantInfo.email}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                        {restaurantInfo.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="bg-zinc-900 border-orange-500/20 p-6 hover:border-orange-500 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <Clock className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Opening Hours</h3>
                      <p className="text-gray-400">Mon-Fri: {restaurantInfo.hours.weekday}</p>
                      <p className="text-gray-400">Sat-Sun: {restaurantInfo.hours.weekend}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden h-64 bg-zinc-900">
                <iframe
                  title="Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682048976327!2d-73.98784368459394!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale"
                ></iframe>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Book a <span className="text-orange-500">Table</span>
              </h2>
              
              <Card className="bg-zinc-900 border-orange-500/20 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zinc-800 border-orange-500/20 text-white focus:border-orange-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-zinc-800 border-orange-500/20 text-white focus:border-orange-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-zinc-800 border-orange-500/20 text-white focus:border-orange-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date" className="text-white mb-2 block">Date *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-zinc-800 border-orange-500/20 text-white focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="time" className="text-white mb-2 block">Time *</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="bg-zinc-800 border-orange-500/20 text-white focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-white mb-2 block">Number of Guests *</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="bg-zinc-800 border-orange-500/20 text-white focus:border-orange-500"
                      placeholder="2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="requests" className="text-white mb-2 block">Special Requests</Label>
                    <Textarea
                      id="requests"
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      className="bg-zinc-800 border-orange-500/20 text-white focus:border-orange-500 min-h-[100px]"
                      placeholder="Any dietary restrictions, special occasions, or seating preferences?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;