
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rcb-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">RCB</h3>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Royal Challengers Bangalore is a franchise cricket team based in Bangalore, Karnataka, that plays in the Indian Premier League.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-rcb-red transition-colors p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-rcb-red transition-colors p-2 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-rcb-red transition-colors p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-rcb-red transition-colors p-2 rounded-full">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">About RCB</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Our Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Fixtures & Results</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">News & Media</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Stadium Information</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Fan Zone</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Shop</a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Ticket Information</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rcb-red transition-colors text-sm">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-rcb-red flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">M. Chinnaswamy Stadium, Bengaluru, Karnataka 560001, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-rcb-red flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 80 4094 8000</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-rcb-red flex-shrink-0" />
                <span className="text-sm text-gray-300">info@royalchallengers.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Royal Challengers Bangalore. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://assets.bcci.tv/bcci/photos/477/d71c9db8-5aaf-4b1b-b88b-2571f2f0ca4a.jpg" 
                alt="BCCI Logo" 
                className="h-8 opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
