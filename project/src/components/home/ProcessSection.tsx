import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PackagePlus, 
  Truck, 
  MapPin, 
  ClipboardCheck, 
  ThumbsUp,
  ArrowRight
} from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  number, 
  title, 
  description, 
  delay,
  isLast = false
}) => {
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
      className="relative flex flex-col items-center"
    >
      {/* Number indicator */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 text-white font-bold text-xl mb-4 z-10">
        {number}
      </div>
      
      {/* Icon */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-soft">
        <div className="w-16 h-16 flex items-center justify-center text-accent-500">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center max-w-xs">{description}</p>
      
      {/* Connecting line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gray-200 -z-10">
          <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-accent-500 h-5 w-5" />
        </div>
      )}
    </motion.div>
  );
};

const ProcessSection: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <PackagePlus className="h-8 w-8" />,
      title: "Book Your Shipment",
      description: "Create your shipment through our website or app. Enter pickup and delivery details to get started.",
      delay: 0.1
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Package Pickup",
      description: "Our agent arrives at your doorstep to collect your package at your scheduled time.",
      delay: 0.3
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Processing & Transport",
      description: "Your package is processed at our facility and transported via the optimal route for delivery.",
      delay: 0.5
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Last-Mile Delivery",
      description: "Our delivery partner brings your package to the recipient's address with care and attention.",
      delay: 0.7
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Delivery Confirmation",
      description: "Receive real-time confirmation once your package is successfully delivered to its destination.",
      delay: 0.9,
      isLast: true
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How <span className="text-accent-500">It Works</span></h2>
          <p className="section-subtitle mx-auto">
            Delivering your packages in 5 simple steps - from booking to final delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={step.delay}
              isLast={step.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;