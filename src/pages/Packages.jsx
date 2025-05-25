import React, { useState } from "react";
import { CheckCircle, Star, TrendingUp, Shield, Zap } from "lucide-react";
import packages from "../data/PackagesData";

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
    const phoneNumber = "919004073766";
    const message = encodeURIComponent("Hello, I need Consultant.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  const PackageCard = ({ pkg }) => (
    <div className={`relative bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-all duration-200 ${pkg.popular ? "ring-2 ring-slate-900" : ""}`}>
      {pkg.popular && (
        <div className="absolute -top-3 left-6">
          <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-600">{pkg.badge}</span>
          <span className="text-sm text-gray-500">{pkg.duration}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

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

      <button className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 ${pkg.popular ? "bg-slate-900 text-white hover:bg-slate-800" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}>Get Started</button>

      <p className="text-xs text-gray-500 mt-3 text-center">*Prices inclusive of GST</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Trading Packages</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the right package for your trading journey. All plans include expert analysis and live support.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-start md:justify-center text-xs md:text-sm gap-3 md:gap-4 mb-6 md:mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
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
        {selectedCategory === "all" ? (
          <div className="space-y-16">
            {Object.entries(groupedPackages).map(([categoryKey, categoryPackages]) => {
              const categoryData = categoryInfo[categoryKey];
              const IconComponent = categoryData.icon;

              return (
                <div key={categoryKey} className="space-y-8 mt-10">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 mr-2 text-gray-700" />
                      <h2 className="text-2xl font-bold text-gray-900">{categoryData.name}</h2>
                    </div>
                    <p className="text-gray-600 max-w-xl mx-auto">{categoryData.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryPackages.map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Help Choosing the Right Package?</h2>
          <p className="text-lg mb-6 opacity-90">Our experts are here to help you select the perfect trading package based on your goals and experience level.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleConsultant} className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">Contact Support</button>
          </div>
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
