import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary-600 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/aksisfire-new.svg" alt="Aksis Fire Systems" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Leading provider of advanced fire suppression and detection systems. We ensure safety and compliance for marine and industrial sectors through innovation and reliability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about/who-we-are" className="hover:text-primary-600 transition-colors">Who We Are</Link></li>
              <li><Link to="/products" className="hover:text-primary-600 transition-colors">Products</Link></li>
              <li><Link to="/about/what-we-do" className="hover:text-primary-600 transition-colors">What We Do</Link></li>
              <li><Link to="/test-research" className="hover:text-primary-600 transition-colors">Test & Research</Link></li>
              <li><Link to="/about/career" className="hover:text-primary-600 transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6 uppercase tracking-wider">Fire Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/solutions/fixed-co2-system" className="hover:text-primary-600 transition-colors">Fixed CO₂ System</Link></li>
              <li><Link to="/solutions/water-spray" className="hover:text-primary-600 transition-colors">Water Spray System</Link></li>
              <li><Link to="/solutions/fire-detection-alarm" className="hover:text-primary-600 transition-colors">Fire Detection</Link></li>
              <li><Link to="/solutions/clean-gas" className="hover:text-primary-600 transition-colors">Clean Gas System</Link></li>
              <li><Link to="/solutions/fi-fi" className="hover:text-primary-600 transition-colors">External Fire Fighting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-600 shrink-0" size={18} />
                <span>Deri OSB, Kazlıçeşme Cd. No:14/A,<br />34953 Tuzla/İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-600 shrink-0" size={18} />
                <span>+90 (216) 306 82 16</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-600 shrink-0" size={18} />
                <span>aksisfire@aksisfire.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aksisfire Systems. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;