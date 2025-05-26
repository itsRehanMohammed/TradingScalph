import React from "react";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl transform group-hover:scale-105 transition-transform duration-200">
                    <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-100 via-blue-500 to-purple-500 bg-clip-text text-transparent">Capital Grow</span>
                  <div className="text-xs text-gray-200 font-medium tracking-wide hidden lg:block">Professional Trading</div>
                </div>
              </Link>
            </div>
            <p className="text-gray-300 max-w-md">Professional trading and portfolio management services helping traders achieve their financial goals with expert guidance and proven strategies.</p>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <p className="text-xs text-gray-400">Phone</p>
                <a href="tel:919004073766" className="text-white hover:text-blue-300 font-medium text-sm">
                  +91 90040 73766
                </a>
              </div>

              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <p className="text-xs text-gray-400">Email</p>
                <a href="mailto:tradingscalph@gmail.com" className="text-white hover:text-blue-300 font-medium text-sm">
                  tradingscalph@gmail.com
                </a>
              </div>

              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <p className="text-xs text-gray-400">Address</p>
                <p className="text-white font-medium text-sm">Satara Plaza, Vashi</p>
                <p className="text-white text-sm">Navi Mumbai - 400089</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/packages" className="hover:text-blue-400 transition-colors text-sm">
                  All Packages
                </Link>
              </li>
              <li>
                <Link to="/packages?category=index-option" className="hover:text-blue-400 transition-colors text-sm">
                  Index Options
                </Link>
              </li>
              <li>
                <Link to="/packages?category=index-option-plus" className="hover:text-blue-400 transition-colors text-sm">
                  Index Options Plus
                </Link>
              </li>
              <li>
                <Link to="/packages?category=index-option-combo" className="hover:text-blue-400 transition-colors text-sm">
                  Index Options Combo
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Capital Grow. All rights reserved. Trading involves risk and may not be suitable for all investors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
