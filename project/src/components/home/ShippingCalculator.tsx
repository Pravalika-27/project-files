import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, TruckIcon, MapPin, Weight, Calculator } from 'lucide-react';

const ShippingCalculator: React.FC = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
  const [packageType, setPackageType] = useState('parcel');
  const [showResult, setShowResult] = useState(false);
  const [estimatedRate, setEstimatedRate] = useState({ amount: 0, days: 0 });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple rate calculation logic (can be replaced with actual business logic)
    const baseRate = 100;
    const weightFactor = parseFloat(weight) * 10;
    const distanceFactor = Math.random() * 300 + 100; // Random distance factor for demo
    const volumeFactor = 
      parseFloat(dimensions.length || '0') * 
      parseFloat(dimensions.width || '0') * 
      parseFloat(dimensions.height || '0') / 1000;
    
    const totalRate = Math.round(baseRate + weightFactor + distanceFactor + volumeFactor);
    const deliveryDays = Math.floor(Math.random() * 3) + 1; // 1-3 days
    
    setEstimatedRate({ amount: totalRate, days: deliveryDays });
    setShowResult(true);
  };

  const resetForm = () => {
    setShowResult(false);
    setFromLocation('');
    setToLocation('');
    setWeight('');
    setDimensions({ length: '', width: '', height: '' });
    setPackageType('parcel');
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="section bg-gradient-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/7363777/pexels-photo-7363777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Calculate Shipping <span className="text-accent-500">Rates</span></h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Get instant estimates for your shipments across India with our easy-to-use calculator.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto text-primary-900">
          {!showResult ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">From Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="input-field pl-10"
                      placeholder="Origin City or PIN Code"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">To Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="input-field pl-10"
                      placeholder="Destination City or PIN Code"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Package Type</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Package className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="input-field pl-10"
                      value={packageType}
                      onChange={(e) => setPackageType(e.target.value)}
                      required
                    >
                      <option value="parcel">Parcel</option>
                      <option value="document">Document</option>
                      <option value="fragile">Fragile</option>
                      <option value="heavy">Heavy Goods</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Weight className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      className="input-field pl-10"
                      placeholder="Package Weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Dimensions (cm)</label>
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="number"
                    min="1"
                    className="input-field"
                    placeholder="Length"
                    value={dimensions.length}
                    onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
                  />
                  <input
                    type="number"
                    min="1"
                    className="input-field"
                    placeholder="Width"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
                  />
                  <input
                    type="number"
                    min="1"
                    className="input-field"
                    placeholder="Height"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button type="submit" className="btn-primary">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Rate
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-100 text-accent-500 mb-6">
                <TruckIcon className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Estimated Shipping Cost</h3>
              <p className="text-gray-600 mb-6">From {fromLocation} to {toLocation}</p>
              
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div>
                  <p className="text-sm text-gray-500">Estimated Cost</p>
                  <p className="text-4xl font-bold text-accent-500">₹{estimatedRate.amount}</p>
                </div>
                <div className="h-16 w-px bg-gray-300"></div>
                <div>
                  <p className="text-sm text-gray-500">Delivery Time</p>
                  <p className="text-4xl font-bold text-primary-800">{estimatedRate.days} {estimatedRate.days === 1 ? 'Day' : 'Days'}</p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <p className="text-sm text-gray-600">
                  * This is an estimate based on the information provided. Actual rates may vary based on specific requirements, fuel surcharges, and peak season adjustments.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={resetForm}
                  className="btn-outline"
                >
                  Calculate Another
                </button>
                <button className="btn-primary">
                  Book This Shipment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ShippingCalculator;