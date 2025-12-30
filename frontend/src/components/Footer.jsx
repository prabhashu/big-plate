import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Music2, Phone, Mail, MapPin } from 'lucide-react';
import { restaurantInfo } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-500/20 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_1b939946-147d-4f31-ab55-54b3bc50dd7a/artifacts/v1n8eof4_image.png" 
                alt="Big Plate Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-white">
                Big <span className="text-orange-500">Plate</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Big flavors, fresh ingredients, and portions that never disappoint.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm hover:text-orange-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{restaurantInfo.address}, {restaurantInfo.city}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm">{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm">{restaurantInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <div className="space-y-2 mb-6">
              <p className="text-sm">
                <span className="text-white">Mon-Fri:</span> {restaurantInfo.hours.weekday}
              </p>
              <p className="text-sm">
                <span className="text-white">Sat-Sun:</span> {restaurantInfo.hours.weekend}
              </p>
            </div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href={restaurantInfo.social.facebook} 
                className="p-2 bg-orange-500/10 hover:bg-orange-500 rounded-lg transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-orange-500 group-hover:text-white" />
              </a>
              <a 
                href={restaurantInfo.social.instagram} 
                className="p-2 bg-orange-500/10 hover:bg-orange-500 rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-orange-500 group-hover:text-white" />
              </a>
              <a 
                href={restaurantInfo.social.tiktok} 
                className="p-2 bg-orange-500/10 hover:bg-orange-500 rounded-lg transition-colors group"
                aria-label="TikTok"
              >
                <Music2 size={20} className="text-orange-500 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500/20 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Big Plate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;