import React from "react";
import { TrendingUp, Shield, Users, Award, Target, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "10K+", label: "Trusted Clients", icon: Users },
    { number: "95%+", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Market Support", icon: Clock },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Built on integrity with complete transparency in our trading strategies and performance.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Consistent track record of delivering superior returns through disciplined market analysis.",
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your financial growth is our priority. We succeed when our clients achieve their goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-100">
              <TrendingUp className="w-4 h-4 mr-2" />
              About Capital Grow
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Empowering Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Trading Journey</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">Since 2009, we've been helping traders navigate the complexities of financial markets with expert guidance, proven strategies, and unwavering commitment to your success.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 bg-gradient-to-b from-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-xl prose-gray max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Founded in 2009, Capital Grow emerged from a simple yet powerful vision: to democratize access to professional trading expertise and help individuals achieve financial independence through informed market participation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a commitment to excellence in options trading has evolved into a comprehensive platform serving thousands of clients across India. Our approach combines rigorous market analysis, risk management, and personalized support to deliver consistent
                results in an ever-changing market landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our core values shape every decision we make and every service we provide.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed">To empower every trader with the knowledge, tools, and support needed to make informed investment decisions and achieve sustainable financial growth in the dynamic world of securities trading.</p>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-amber-200">
              <Shield className="w-4 h-4 mr-2" />
              Important Disclosure
            </div>
            <p className="text-amber-800 leading-relaxed">
              Trading and investments in securities market carry inherent risks. Past performance does not guarantee future results. Please ensure you understand the risks involved and consider your financial situation before making investment decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
