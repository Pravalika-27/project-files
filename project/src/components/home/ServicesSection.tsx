import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Plane, BarChart3, Building as Buildings, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay }}
      className="card-hover group"
    >
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-500 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Package className="h-7 w-7" />,
      title: "Domestic Delivery",
      description: "Fast and reliable delivery service covering all major cities and remote locations across India.",
      link: "/services#domestic",
      delay: 0.1
    },
    {
      icon: <Plane className="h-7 w-7" />,
      title: "International Shipping",
      description: "Seamless global shipping to over 220+ countries with customs clearance and real-time tracking.",
      link: "/services#international",
      delay: 0.2
    },
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Express Delivery",
      description: "Same-day and next-day delivery options for urgent shipments with priority handling.",
      link: "/services#express",
      delay: 0.3
    },
    {
      icon: <Buildings className="h-7 w-7" />,
      title: "Warehousing Solutions",
      description: "Secure storage facilities with inventory management and fulfillment services.",
      link: "/services#warehousing",
      delay: 0.4
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "E-commerce Integration",
      description: "Seamless integration with major e-commerce platforms for automated order processing.",
      link: "/services#ecommerce",
      delay: 0.5
    },
    {
      icon: <Package className="h-7 w-7" />,
      title: "Specialized Handling",
      description: "Custom packaging and handling for fragile, oversized, or high-value items requiring special care.",
      link: "/services#specialized",
      delay: 0.6
    }
  ];

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Delivery <span className="text-accent-500">Services</span></h2>
          <p className="section-subtitle mx-auto">
            Comprehensive logistics solutions designed to meet your business needs with speed, reliability, and affordability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;