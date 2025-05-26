import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: true,
      items: [
        { name: 'Domestic Delivery', path: '/services#domestic' },
        { name: 'International Shipping', path: '/services#international' },
        { name: 'Express Delivery', path: '/services#express' },
        { name: 'Warehousing', path: '/services#warehousing' },
      ]
    },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Truck className="h-8 w-8 text-accent-500" />
          <span className="ml-2 text-xl font-bold text-primary-900">
            NXT<span className="text-accent-500">Delivery</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <>
                  <button 
                    onClick={toggleServices}
                    className={`flex items-center text-sm font-medium hover:text-accent-500 transition-colors ${
                      location.pathname === link.path ? 'text-accent-500' : 'text-primary-800'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all origin-top-right ${
                    servicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                    <div className="py-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-primary-800 hover:bg-gray-100 hover:text-accent-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium hover:text-accent-500 transition-colors ${
                    location.pathname === link.path ? 'text-accent-500' : 'text-primary-800'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/quote" className="btn-outline">
            Get a Quote
          </Link>
          <Link to="/tracking" className="btn-primary">
            Track Shipment
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-primary-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Truck className="h-8 w-8 text-accent-500" />
            <span className="ml-2 text-xl font-bold text-primary-900">
              NXT<span className="text-accent-500">Delivery</span>
            </span>
          </Link>
          <button
            className="text-primary-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesOpen(!servicesOpen);
                      }}
                      className="flex items-center justify-between w-full py-2 text-primary-800 font-medium"
                    >
                      {link.name}
                      <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-2 text-primary-700 hover:text-accent-500"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block py-2 font-medium hover:text-accent-500 ${
                      location.pathname === link.path ? 'text-accent-500' : 'text-primary-800'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-4">
            <Link to="/quote" className="block w-full btn-outline text-center" onClick={closeMenu}>
              Get a Quote
            </Link>
            <Link to="/tracking" className="block w-full btn-primary text-center" onClick={closeMenu}>
              Track Shipment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;