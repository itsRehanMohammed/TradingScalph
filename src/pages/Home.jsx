import React, { useState } from "react";
import FAQ from "../components/Accordion/FAQ";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
// import { ServicesWrapper } from "../components/Helpers/Helpers";
import { TrendingUp, Shield, Users, BarChart3, CheckCircle, Star, Menu, ArrowRight, Zap, X, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Expert Analysis",
      description: "Scientific trading strategies backed by comprehensive market research and technical analysis.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Proven risk management techniques with well-researched targets and stop-loss levels.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Support",
      description: "Live market support from experienced professionals with a track record of success.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Consistent Returns",
      description: "Track record of outperforming the market with satisfied clients achieving financial growth.",
    },
  ];

  const featuredPackages = [
    {
      id: 1,
      category: "index-option",
      name: "Index Options",
      description: "Professional Bank Nifty and Nifty options trading with expert analysis",
      features: ["Daily research alerts with targets & stop-loss", "Live market customer support", "Android/iOS app & web portal access", "Well-researched trading signals"],
      price: "₹88,000",
      period: "Monthly",
      popular: false,
      icon: Shield,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      category: "index-option-plus",
      name: "Index Options Plus",
      description: "Enhanced trading with expiry specials and multiple daily alerts",
      features: ["1-2 research alerts daily", "Weekly expiry special alerts", "Premium support & guidance", "Enhanced market coverage"],
      price: "₹1,15,000",
      period: "Monthly",
      popular: true,
      icon: Star,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      category: "index-option-combo",
      name: "Index Options Combo",
      description: "Complete trading solution with multiple instruments coverage",
      features: ["2-3 research alerts daily", "FinNifty coverage included", "BTST levels & expiry specials", "Comprehensive market analysis"],
      price: "₹1,85,000",
      period: "Monthly",
      popular: false,
      icon: Zap,
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  const handleGetStarted = (packageId) => {
    // This would handle package selection
    console.log("Get started with package:", packageId);
  };

  return (
    <>
      <div className="">
        <Hero />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Trading Scalph</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Manage your account, take control of your trades with our comprehensive platform designed for success.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Packages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Choose from our range of professional trading packages designed to match your investment goals and risk appetite. Each package includes expert analysis and live market support.</p>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Shield className="w-4 h-4 mr-2" />
                12 Comprehensive Packages Available
              </div>
            </div>

            {/* Featured Packages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {featuredPackages.map((pkg) => {
                const IconComponent = pkg.icon;
                return (
                  <div key={pkg.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? "ring-2 ring-purple-500" : ""} relative overflow-hidden`}>
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-2 -right-2 transform z-10">
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">Most Popular</span>
                      </div>
                    )}

                    {/* Gradient Top Border */}
                    <div className={`h-1 bg-gradient-to-r ${pkg.gradient}`}></div>

                    <div className="p-8">
                      {/* Package Header */}
                      <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${pkg.gradient} text-white mb-4`}>
                          <IconComponent className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                        <p className="text-gray-600 mb-6">{pkg.description}</p>

                        <div className="mb-6">
                          <div className="flex items-center justify-center">
                            <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                            <span className="text-gray-600 ml-2">/{pkg.period}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">Starting price - Multiple durations available</p>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <button
                        onClick={() => handleGetStarted(pkg.id)}
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                          pkg.popular ? `bg-gradient-to-r ${pkg.gradient} text-white hover:shadow-lg transform hover:scale-105` : `border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50`
                        }`}
                      >
                        Get Started Now
                      </button>

                      <p className="text-xs text-gray-500 mt-4 text-center">*All Prices are inclusive of GST</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* See All Packages CTA */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Explore All Packages</h3>
                <p className="text-lg text-gray-600 mb-8">We offer 12 comprehensive packages across different categories and durations. Find the perfect match for your trading style and investment goals.</p>

                {/* Package Categories Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Index Options</h4>
                    <p className="text-sm text-gray-600">4 packages available</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-3">
                      <Star className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Index Options Plus</h4>
                    <p className="text-sm text-gray-600">4 packages available</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-3">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Index Options Combo</h4>
                    <p className="text-sm text-gray-600">4 packages available</p>
                  </div>
                </div>

                <Link to="/packages" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  See All Packages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-700 font-semibold">Total Packages</div>
                <div className="text-sm text-gray-500">Across all categories</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Live Support</div>
                <div className="text-sm text-gray-500">Market hours assistance</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700 font-semibold">Research Based</div>
                <div className="text-sm text-gray-500">Expert analysis included</div>
              </div>
            </div>

            {/* Risk Disclaimer */}
            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Risk Disclosure</h4>
                  <p className="text-sm text-yellow-700">All packages involve high to very high risk levels. Options trading can result in significant losses. Please ensure you understand the risks involved and trade responsibly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Performance Report Says It All</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Explore the power of informed decision-making through our expert stock market advisory services. At Trading Scalph, we specialize in Bank Nifty, Nifty, and other stocks and derivatives, providing carefully crafted strategies and effective risk management
                  techniques.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-700 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%+</div>
                    <div className="text-gray-700 font-medium">Success Rate</div>
                  </div>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Consistent market outperformance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Proven track record since 2009</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Satisfied clients with significant growth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Expert Advisors</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Reliable Trading Calls</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">24/7 Support</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Regulatory Compliance</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r mx-4 px-4  md:max-w-7xl rounded-lg md:mx-auto from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Trading Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of successful traders who trust Trading Scalph for their investment decisions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg flex items-center justify-center">
                Join Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/packages" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>
        {/* <ServicesWrapper /> */}
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
