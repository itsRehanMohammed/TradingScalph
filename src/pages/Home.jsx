import React, { useState } from "react";
import FAQ from "../components/Accordion/FAQ";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
import {
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  Star,
  Menu,
  ArrowRight,
  Zap,
  X,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { handlechat, handleStartTrading } from "../components/Helpers/Helpers";

const Home = () => {
  const features = [
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Expert Analysis",
      description:
        "Scientific trading strategies backed by comprehensive market research and technical analysis.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Risk Management",
      description:
        "Proven risk management techniques with well-researched targets and stop-loss levels.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Professional Support",
      description:
        "Live market support from experienced professionals with a track record of success.",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Consistent Returns",
      description:
        "Track record of outperforming the market with satisfied clients achieving financial growth.",
      color: "bg-orange-50 text-orange-600 border-orange-100",
    },
  ];

  const featuredPackages = [
    {
      id: 1,
      category: "index-option",
      name: "Index Options",
      description:
        "Professional Bank Nifty and Nifty options trading with expert analysis",
      features: [
        "Daily research alerts with targets & stop-loss",
        "Live market customer support",
        "Android/iOS app & web portal access",
        "Well-researched trading signals",
      ],
      price: "₹88,000",
      period: "Monthly",
      popular: false,
      icon: Shield,
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      ringColor: "ring-blue-200",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      category: "index-option-plus",
      name: "Index Options Plus",
      description:
        "Enhanced trading with expiry specials and multiple daily alerts",
      features: [
        "1-2 research alerts daily",
        "Weekly expiry special alerts",
        "Premium support & guidance",
        "Enhanced market coverage",
      ],
      price: "₹1,15,000",
      period: "Monthly",
      popular: true,
      icon: Star,
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      ringColor: "ring-purple-200",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      id: 3,
      category: "index-option-combo",
      name: "Index Options Combo",
      description:
        "Complete trading solution with multiple instruments coverage",
      features: [
        "2-3 research alerts daily",
        "FinNifty coverage included",
        "BTST levels & expiry specials",
        "Comprehensive market analysis",
      ],
      price: "₹1,85,000",
      period: "Monthly",
      popular: false,
      icon: Zap,
      gradient: "from-orange-500 via-orange-600 to-orange-700",
      ringColor: "ring-orange-200",
      badgeColor: "bg-orange-100 text-orange-700",
    },
  ];

  const handleGetStarted = (pkg) => {
    handlechat(`Hi, I'm interested in the ${pkg.name} package.`);
  };

  const trustIndicators = [
    {
      icon: <Award className="w-6 h-6" />,
      number: "15+",
      label: "Years of Excellence",
      sublabel: "Proven track record",
      color: "text-blue-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "10K+",
      label: "Happy Clients",
      sublabel: "Trusted nationwide",
      color: "text-emerald-600",
    },
    {
      icon: <Target className="w-6 h-6" />,
      number: "95%+",
      label: "Success Rate",
      sublabel: "Consistent performance",
      color: "text-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "24/7",
      label: "Live Support",
      sublabel: "Always available",
      color: "text-orange-600",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-slate-50/50 to-white">
        <Hero />

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
                <Sparkles className="w-4 h-4 mr-2" />
                Why Choose Trading Scalph
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Trading Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the difference with our comprehensive platform
                designed for success. Join thousands who trust us with their
                trading journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/50 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border-2 ${feature.color} transition-all duration-300 group-hover:scale-110`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section
          id="packages"
          className="py-24 bg-gradient-to-b from-slate-50/30 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-100">
                <Shield className="w-4 h-4 mr-2" />
                12 Comprehensive Packages Available
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Trading Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expertly crafted packages designed to match your investment
                goals and risk appetite. Each package includes professional
                analysis and dedicated market support.
              </p>
            </div>

            {/* Featured Packages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredPackages.map((pkg) => {
                const IconComponent = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group ${
                      pkg.popular ? `ring-2 ${pkg.ringColor} md:scale-105` : ""
                    }`}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Gradient Accent */}
                    <div
                      className={`h-2 bg-gradient-to-r ${pkg.gradient}`}
                    ></div>

                    <div className="p-8 pt-10">
                      {/* Package Header */}
                      <div className="text-center mb-8">
                        <div
                          className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${pkg.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-10 h-10" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {pkg.name}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {pkg.description}
                        </p>

                        <div className="mb-8">
                          <div className="flex items-center justify-center mb-2">
                            <span className="text-4xl font-bold text-gray-900">
                              {pkg.price}
                            </span>
                            <span className="text-gray-500 ml-2 text-lg">
                              /{pkg.period}
                            </span>
                          </div>
                          <div
                            className={`inline-flex items-center ${pkg.badgeColor} px-3 py-1 rounded-full text-xs font-semibold`}
                          >
                            Multiple durations available
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mr-3 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleGetStarted(pkg)}
                        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          pkg.popular
                            ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-lg hover:shadow-xl`
                            : `bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-100 hover:shadow-md`
                        }`}
                      >
                        Get Started
                        <ArrowRight className="inline-block ml-2 w-5 h-5" />
                      </button>

                      <p className="text-xs text-gray-500 mt-4 text-center">
                        *All Prices are inclusive of GST
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* See All Packages CTA */}
            <div className="text-center mb-16">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 max-w-4xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Explore All Our Packages
                </h3>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Discover our complete range of 12 comprehensive packages
                  across different categories and durations. Find the perfect
                  match for your trading style and investment goals.
                </p>

                {/* Package Categories Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 border-2 border-blue-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Index Options
                    </h4>
                    <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full inline-block">
                      4 packages available
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 border-2 border-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Index Options Plus
                    </h4>
                    <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full inline-block">
                      4 packages available
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 border-2 border-orange-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      Index Options Combo
                    </h4>
                    <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full inline-block">
                      4 packages available
                    </p>
                  </div>
                </div>

                <Link
                  to="/packages"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white px-10 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View All Packages
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 ${indicator.color} mb-4`}
                  >
                    {indicator.icon}
                  </div>
                  <div className={`text-3xl font-bold ${indicator.color} mb-2`}>
                    {indicator.number}
                  </div>
                  <div className="text-gray-900 font-semibold mb-1">
                    {indicator.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {indicator.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Risk Disclaimer */}
            <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8">
              <div className="flex items-start max-w-4xl mx-auto">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-800 mb-3 text-lg">
                    Important Risk Disclosure
                  </h4>
                  <p className="text-amber-700 leading-relaxed">
                    All trading packages involve high to very high risk levels.
                    Options trading can result in significant losses. Please
                    ensure you understand the risks involved and trade
                    responsibly. Past performance does not guarantee future
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section id="performance" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-100">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Proven Track Record
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Performance Report Says It All
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Experience the power of informed decision-making through our
                  expert stock market advisory services. At Trading Scalph, we
                  specialize in Bank Nifty, Nifty, and other derivatives with
                  proven strategies.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
                    <div className="text-4xl font-bold text-blue-700 mb-2">
                      15+
                    </div>
                    <div className="text-blue-800 font-semibold">
                      Years Experience
                    </div>
                    <div className="text-sm text-blue-600 mt-1">Since 2009</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 text-center border border-emerald-200">
                    <div className="text-4xl font-bold text-emerald-700 mb-2">
                      95%+
                    </div>
                    <div className="text-emerald-800 font-semibold">
                      Success Rate
                    </div>
                    <div className="text-sm text-emerald-600 mt-1">
                      Consistent results
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Consistent market outperformance with proven strategies",
                    "Established track record since 2009 with transparency",
                    "Thousands of satisfied clients achieving financial growth",
                    "Regulatory compliance and ethical trading practices",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed text-lg">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl md:p-8 border border-gray-100">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Key Benefits
                      </h3>
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="space-y-6">
                      {[
                        {
                          label: "Expert Financial Advisors",
                          status: "Active",
                        },
                        { label: "Reliable Trading Signals", status: "24/7" },
                        { label: "Live Market Support", status: "Premium" },
                        { label: "Regulatory Compliance", status: "Verified" },
                      ].map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                        >
                          <span className="text-gray-800 font-medium">
                            {benefit.label}
                          </span>
                          <div className="flex items-center">
                            <span className="text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full mr-3">
                              {benefit.status}
                            </span>
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-center shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Start Your Trading Journey?
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of successful traders who trust Trading Scalph
                  for their investment decisions. Start your journey to
                  financial growth today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={handleStartTrading}
                    className="bg-white text-blue-700 px-2 md:px-10  py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Start Trading Now
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </button>
                  <Link
                    to="/packages"
                    className="border-2 border-white text-white px-2 md:px-10 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 font-bold text-lg transform hover:scale-105"
                  >
                    View All Plans
                  </Link>
                </div>
                <div className="mt-8 text-blue-200 text-sm">
                  ✓ No hidden fees ✓ Expert support ✓ Proven strategies
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </div>
    </>
  );
};

export default Home;
