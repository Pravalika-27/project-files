import React from 'react';
import { Truck, Package, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, suffix = '', label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-500 mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-2 text-primary-900">
        {inView ? (
          <CountUp end={value} duration={2.5} separator="," suffix={suffix} />
        ) : (
          0
        )}
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Trusted by <span className="text-accent-500">Businesses</span> Across India</h2>
          <p className="section-subtitle mx-auto">
            Our numbers speak for themselves - join thousands of satisfied customers who rely on NXTDelivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          <StatItem
            icon={<Package className="h-8 w-8" />}
            value={5000000}
            label="Packages Delivered"
            delay={0.1}
          />
          <StatItem
            icon={<MapPin className="h-8 w-8" />}
            value={28000}
            suffix="+"
            label="Pin Codes Served"
            delay={0.2}
          />
          <StatItem
            icon={<Users className="h-8 w-8" />}
            value={50000}
            suffix="+"
            label="Active Customers"
            delay={0.3}
          />
          <StatItem
            icon={<Truck className="h-8 w-8" />}
            value={99.8}
            suffix="%"
            label="Delivery Success Rate"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;