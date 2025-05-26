import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Zap, Shield, BadgePercent } from 'lucide-react';

const CtaSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-70"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/7706434/pexels-photo-7706434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="text-accent-500">Streamline</span> Your Delivery Operations?
              </h2>
              <p className="text-gray-200 text-lg mb-8">
                Join thousands of businesses that have simplified their logistics and delighted their customers with NXTDelivery.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn-accent">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="bg-white text-primary-900 btn hover:bg-gray-100">
                  Talk to Sales
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start"
              >
                <div className="bg-accent-500 p-2 rounded mr-4">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Fast Integration</h3>
                  <p className="text-gray-200">Connect your store or system in minutes, not days</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start"
              >
                <div className="bg-accent-500 p-2 rounded mr-4">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">100% Secure</h3>
                  <p className="text-gray-200">End-to-end package protection and insurance options</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start"
              >
                <div className="bg-accent-500 p-2 rounded mr-4">
                  <BadgePercent className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Competitive Rates</h3>
                  <p className="text-gray-200">Save up to 45% compared to traditional courier services</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;