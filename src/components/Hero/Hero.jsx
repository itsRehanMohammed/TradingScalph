import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleGetStarted = () => {};

  const stats = [
    { number: "2000+", label: "Active Traders" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];
  // const handleWhatsAppClick = () => {
  //   const phoneNumber = "919004073766"; // Your WhatsApp business number
  //   const message = encodeURIComponent(
  //     "Hello, I would like to inquire about your services."
  //   );
  //   const url = `https://wa.me/${phoneNumber}?text=${message}`;
  //   window.open(url, "_blank");
  // };

  return (
    <section id="home" className="bg-gradient-to-br from-white to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Start Trading with
              <span className="text-blue-600"> Trusted Experts</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">A trading platform that supports your financial goals. Let us help get you on the right track as you start your investing journey with professional portfolio management and expert trade levels.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center">
                Open Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">View Performance</button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
