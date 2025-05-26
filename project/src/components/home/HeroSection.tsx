import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      
      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fast & Reliable <span className="text-accent-500">Delivery</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Delivering excellence across India with affordable rates, robust tracking, and secure handling.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/tracking" className="btn-outline">
                Track Shipment
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-accent-500 p-2 rounded-lg mr-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Secure Packaging</p>
                  <p className="text-sm text-gray-300">Safe transit guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-accent-500 p-2 rounded-lg mr-4">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Nationwide Coverage</p>
                  <p className="text-sm text-gray-300">Delivery across India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-accent-500 p-2 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Express Delivery</p>
                  <p className="text-sm text-gray-300">Same-day options available</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary-700 rounded-full opacity-30 animate-pulse"></div>
              
              <img 
                src="https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Delivery Service" 
                className="rounded-lg shadow-2xl relative z-10 animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;