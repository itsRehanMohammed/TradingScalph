import React, { useState } from "react";
import { CheckCircle, Star, TrendingUp, Shield, Zap } from "lucide-react";
import packages from "../data/PackagesData";
import { handlechat } from "../components/Helpers/Helpers";
import { Link, useSearchParams } from "react-router-dom";

const Packages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";

  const categories = [
    { id: "all", name: "All Packages", icon: TrendingUp },
    { id: "index-option", name: "Index Options", icon: Shield },
    { id: "index-option-plus", name: "Index Options Plus", icon: Star },
    { id: "index-option-combo", name: "Index Options Combo", icon: Zap },
  ];

  const categoryInfo = {
    "index-option": {
      name: "Index Options",
      icon: Shield,
      description: "Essential trading alerts for Bank Nifty and Nifty options",
    },
    "index-option-plus": {
      name: "Index Options Plus",
      icon: Star,
      description: "Enhanced coverage with expiry specials and multiple alerts",
    },
    "index-option-combo": {
      name: "Index Options Combo",
      icon: Zap,
      description: "Complete solution with Fin Nifty and BTST coverage",
    },
  };

  const handleCategoryChange = (categoryId) => {
    if (categoryId === "all") {
      // Remove the category param for "all"
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      // Set the category param
      setSearchParams({ category: categoryId });
    }
  };

  const filteredPackages = selectedCategory === "all" ? packages : packages.filter((pkg) => pkg.category === selectedCategory);

  const groupedPackages =
    selectedCategory === "all"
      ? {
          "index-option": packages.filter((pkg) => pkg.category === "index-option"),
          "index-option-plus": packages.filter((pkg) => pkg.category === "index-option-plus"),
          "index-option-combo": packages.filter((pkg) => pkg.category === "index-option-combo"),
        }
      : null;

  const handleConsultant = () => {
    const phoneNumber = "919702439196";
    const message = encodeURIComponent("Hello, I need Consultation.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_self");
  };

  const handleGetStarted = (pkg) => {
    handlechat(`Hi, I'm interested in the ${pkg.name} package.`);
  };
  const PackageCard = ({ pkg }) => (
    <div
      className={`relative rounded-lg border p-6 transition-all duration-200 ${
        pkg.category === "premium-option-combo" ? "bg-orange-50 border-orange-300 ring-2 ring-orange-400 shadow-lg" : `bg-white border-gray-800 hover:border-gray-900 ${pkg.popular ? "ring-2 ring-blue-500" : ""}`
      }`}
    >
      {pkg.category === "premium-option-combo" && (
        <div className="absolute -top-3 left-6">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">🔥 Limited Time Offer</span>
        </div>
      )}
      {pkg.popular && pkg.category !== "premium-option-combo" && (
        <div className="absolute -top-3 left-6">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-600">{pkg.badge}</span>
          <span className="text-sm text-gray-500">{pkg.duration}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

        {pkg.category === "premium-option-combo" && (
          <div className="bg-orange-100 border border-orange-300 rounded-md p-3 mb-4">
            <p className="text-xs font-semibold text-orange-900 mb-1">💼 Exclusively for High Net Worth Investors</p>
            {/* <p className="text-xs text-orange-800">Designed for serious traders and institutional investors seeking comprehensive coverage with advanced AI-powered insights and premium support.</p> */}
          </div>
        )}

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
            <span className="text-gray-500 ml-1">/{pkg.duration.toLowerCase()}</span>
          </div>
          {pkg.originalPrice && (
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-400 line-through mr-2">{pkg.originalPrice}</span>
              <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded font-medium">Save {Math.round((1 - parseInt(pkg.price.replace(/[^\d]/g, "")) / parseInt(pkg.originalPrice.replace(/[^\d]/g, ""))) * 100)}%</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {pkg.features.map((feature, idx) => (
          <div key={idx} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
          pkg.category === "premium-option-combo" ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md" : pkg.popular ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-slate-900 text-gray-100 hover:bg-slate-800"
        }`}
        onClick={() => handleGetStarted(pkg)}
      >
        {pkg.category === "premium-option-combo" ? "Claim Exclusive Offer" : "Get Started"}
      </button>

      <p className="text-xs text-gray-500 mt-3 text-center">*Prices inclusive of GST</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Packages</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the right package for your trading journey. All plans include expert analysis and live support.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-start md:justify-center text-xs md:text-sm gap-3 md:gap-4 mb-6 md:mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`cursor-pointer flex items-center px-3 md:px-6 py-2 rounded-md md:rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id ? "bg-blue-600 text-white shadow-lg transform scale-105" : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                <IconComponent className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Packages Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex">
            <Shield className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-900 mb-1">Risk Disclosure</h3>
              <p className="text-sm text-amber-800">Trading involves high risk and may result in significant losses. Please understand the risks and trade responsibly. Past performance does not guarantee future results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
