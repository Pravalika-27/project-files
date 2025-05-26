import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, MapPin, Truck, CheckCircle } from 'lucide-react';

const TrackingPage: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | {
    status: string;
    location: string;
    timestamp: string;
    updates: Array<{
      status: string;
      location: string;
      timestamp: string;
    }>;
  }>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    
    // Simulated tracking result
    setTimeout(() => {
      setTrackingResult({
        status: "In Transit",
        location: "Mumbai, Maharashtra",
        timestamp: new Date().toLocaleString(),
        updates: [
          {
            status: "Package Picked Up",
            location: "Delhi, India",
            timestamp: "2024-02-20 10:30 AM"
          },
          {
            status: "In Transit",
            location: "Mumbai, Maharashtra",
            timestamp: "2024-02-21 02:15 PM"
          }
        ]
      });
      setIsTracking(false);
    }, 1500);
  };

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
              Track Your <span className="text-accent-500">Shipment</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Real-time tracking for your deliveries
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleTrack} className="flex gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Enter your tracking number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                  <Package className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  disabled={isTracking}
                  className="btn-primary px-8 py-4"
                >
                  {isTracking ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Tracking...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Search className="mr-2 h-5 w-5" />
                      Track
                    </span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracking Result */}
      {trackingResult && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Tracking Details</h2>
                    <p className="text-gray-600">Tracking Number: {trackingNumber}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-500">
                      <span className="mr-2">{trackingResult.status}</span>
                      <Truck className="h-5 w-5" />
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-8">
                  {trackingResult.updates.map((update, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent-500"></div>
                      {index !== trackingResult.updates.length - 1 && (
                        <div className="absolute left-2 top-6 w-0.5 h-full -ml-px bg-accent-200"></div>
                      )}
                      <div className="mb-1 flex items-center text-lg font-semibold text-gray-900">
                        {update.status}
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {update.location}
                      </div>
                      <div className="text-sm text-gray-500">
                        {update.timestamp}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Track with Confidence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about your shipment's journey with our advanced tracking system
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-8 w-8" />,
                title: "Real-time Updates",
                description: "Get instant notifications about your package's location and status"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Detailed Timeline",
                description: "View complete delivery history with timestamps and locations"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Delivery Confirmation",
                description: "Receive proof of delivery with electronic signature"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

export default TrackingPage;