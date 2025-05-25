import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TrendingUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const pathName = location.pathname;
  const navLinks = ["Home", "Services", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle closing the navbar after a link click
  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Trading Scalph</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>

              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link to="/packages" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Packages
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 hover:text-blue-600 p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">
              Home
            </Link>

            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link to="/packages" className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2">
              Packages
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
