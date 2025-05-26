import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import { handleStartTrading } from "../Helpers/Helpers";

const Hero = () => {
  const stats = [
    { number: "2000+", label: "Active Traders", icon: Users },
    { number: "15+", label: "Years Experience", icon: TrendingUp },
    { number: "95%", label: "Success Rate", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const scrollToPerformance = () => {
    const performanceSection = document.getElementById("performance");
    if (performanceSection) {
      performanceSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-slate-900">
                <span className="text-slate-800">Start Trading with</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Trusted Experts
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                A reliable trading platform that supports your financial goals.
                Let us help get you on the right track as you start your
                investing journey with professional portfolio management and
                proven expertise.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-600" />
                Regulated & Secure
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                Proven Track Record
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-600" />
                Expert Support
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={handleStartTrading}
                className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              >
                <div className="flex items-center justify-center">
                  <span className="mr-2">Start Trading Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              <button
                onClick={scrollToPerformance}
                className="group px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-200/50 shadow-sm"
              >
                <span className="flex items-center justify-center">
                  View Performance
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="lg:pl-12">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 lg:p-8 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 hover:border-blue-200 hover:bg-white"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 text-center space-y-3">
                      <div className="inline-flex p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800">
                        {stat.number}
                      </div>
                      <div className="text-sm lg:text-base text-slate-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Market status indicator */}
            <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-emerald-700">
                      Markets Open
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  Real-time Trading Available
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 rounded-xl border border-slate-100">
                <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xs font-medium text-slate-700">
                  Regulated
                </div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl border border-slate-100">
                <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-xs font-medium text-slate-700">
                  Verified
                </div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl border border-slate-100">
                <Users className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <div className="text-xs font-medium text-slate-700">
                  Trusted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
