import React from "react";
import { TrendingUp, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Trading Scalph</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">Professional trading and portfolio management services helping traders achieve their financial goals with expert guidance and proven strategies.</p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Index Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Options Plus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Options Combo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Portfolio Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Performance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Trading Scalph. All rights reserved. Trading involves risk and may not be suitable for all investors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
