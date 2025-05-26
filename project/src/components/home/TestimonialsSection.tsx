import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  position, 
  company, 
  rating, 
  image 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-8 md:p-10">
      <div className="flex justify-between items-start mb-6">
        <div className="text-accent-500">
          <Quote className="h-10 w-10 -ml-1" />
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'fill-accent-500 text-accent-500' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-14 h-14 rounded-full object-cover mr-4" 
        />
        <div>
          <p className="font-semibold text-primary-900">{author}</p>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "NXTDelivery completely transformed our logistics operations. Their same-day delivery option helped us improve customer satisfaction rates by 40%. Their tracking system gives us complete visibility at every step.",
      author: "Rajiv Mehta",
      position: "Operations Director",
      company: "TechBazaar",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Since partnering with NXTDelivery, our e-commerce returns have decreased significantly. Their careful handling and secure packaging have made a huge difference in how our products arrive to customers.",
      author: "Priya Singh",
      position: "Logistics Manager",
      company: "Fashion Trends Ltd",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "What impressed us most was NXTDelivery's ability to handle our peak season volumes without any hiccups. Their warehousing solution integrates perfectly with our inventory system.",
      author: "Vikram Patel",
      position: "Supply Chain Head",
      company: "Organica Foods",
      rating: 4,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a small business, affordability and reliability are crucial. NXTDelivery provides both without compromise. Their customer service team is responsive and always ready to help.",
      author: "Ananya Desai",
      position: "Founder",
      company: "Handcrafted Treasures",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Display either 1 or 2 testimonials based on screen size
  const displayTestimonials = () => {
    // On smaller screens, show 1 testimonial
    if (window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }
    
    // On larger screens, show 2 testimonials
    const secondIndex = (currentIndex + 1) % testimonials.length;
    return [testimonials[currentIndex], testimonials[secondIndex]];
  };

  return (
    <section className="section bg-gray-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our <span className="text-accent-500">Customers</span> Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it - hear from businesses that have transformed their logistics with NXTDelivery.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(currentIndex, currentIndex + 2 > testimonials.length ? testimonials.length : currentIndex + 2).map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
            {currentIndex + 1 >= testimonials.length && (
              <motion.div
                key={0}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Testimonial {...testimonials[0]} />
              </motion.div>
            )}
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;