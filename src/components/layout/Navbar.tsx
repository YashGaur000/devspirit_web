import React from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">TechPro Solutions</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className={`${isActive('/solutions') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Solutions
            </Link>
            <a href="/#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="/#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/#case-studies" className="text-gray-600 hover:text-blue-600">Case Studies</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className={`block px-3 py-2 ${isActive('/solutions') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Solutions
            </Link>
            <a href="/#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
            <a href="/#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="/#case-studies" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Case Studies</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}