import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Truck className="h-8 w-8 text-accent-500" />
              <span className="ml-2 text-xl font-bold">
                NXT<span className="text-accent-500">Delivery</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Delivering excellence from one place to another with speed, security, and affordability.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#domestic" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Domestic Delivery
                </Link>
              </li>
              <li>
                <Link to="/services#international" className="text-gray-300 hover:text-accent-500 transition-colors">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link to="/services#express" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link to="/services#warehousing" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Warehousing Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="text-gray-300 hover:text-accent-500 transition-colors">
                  E-commerce Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Delivery Street, Logistics City, IN 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="tel:+918001234567" className="text-gray-300 hover:text-accent-500 transition-colors">
                  +91 800 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@nxtdelivery.life" className="text-gray-300 hover:text-accent-500 transition-colors">
                  info@nxtdelivery.life
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NXTDelivery. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-accent-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-400 text-sm hover:text-accent-500 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;