import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Package, 
  Truck, 
  Plane, 
  Building, 
  BarChart3, 
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Domestic Delivery",
      description: "Fast and reliable delivery service covering all major cities and remote locations across India.",
      features: [
        "Door-to-door delivery",
        "Real-time tracking",
        "Proof of delivery",
        "Insurance coverage"
      ]
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "International Shipping",
      description: "Seamless global shipping to over 220+ countries with customs clearance and real-time tracking.",
      features: [
        "Customs clearance",
        "Documentation support",
        "Multiple shipping modes",
        "Competitive rates"
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Express Delivery",
      description: "Same-day and next-day delivery options for urgent shipments with priority handling.",
      features: [
        "Same-day delivery",
        "Priority handling",
        "Time-specific delivery",
        "Live tracking"
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Warehousing Solutions",
      description: "Secure storage facilities with inventory management and fulfillment services.",
      features: [
        "Climate control",
        "24/7 security",
        "Inventory management",
        "Order fulfillment"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "E-commerce Integration",
      description: "Seamless integration with major e-commerce platforms for automated order processing.",
      features: [
        "API integration",
        "Automated shipping",
        "Order sync",
        "Returns management"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Specialized Handling",
      description: "Custom packaging and handling for fragile, oversized, or high-value items requiring special care.",
      features: [
        "Custom packaging",
        "Temperature control",
        "High-value protection",
        "Special handling"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-accent-500">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300"
            >
              Comprehensive logistics solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-soft p-6"
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent-100 text-accent-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose NXTDelivery?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium delivery services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fast Delivery",
                description: "Same-day delivery available for urgent shipments"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Handling",
                description: "End-to-end protection for your valuable items"
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Real-time Tracking",
                description: "Monitor your shipments 24/7 with live updates"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;