import React, { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { TrendingUp, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Packages", href: "/packages", hasDropdown: true },
  ];

  const packageDropdownItems = [
    { name: "All Packages", href: "/packages" },
    { name: "Index Options", href: "/packages?category=index-option" },
    {
      name: "Index Options Plus",
      href: "/packages?category=index-option-plus",
    },
    {
      name: "Index Options Combo",
      href: "/packages?category=index-option-combo",
    },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href.split("?")[0]);
  };

  const isPackageDropdownActive = (href) => {
    if (href === "/packages" && !searchParams.get("category")) {
      return true;
    }
    const urlParams = new URLSearchParams(href.split("?")[1]);
    const category = urlParams.get("category");
    return category && searchParams.get("category") === category;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/20 shadow-lg shadow-black/5"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl transform group-hover:scale-105 transition-transform duration-200">
                  <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Trading Scalph
                </span>
                <div className="text-xs text-gray-500 font-medium tracking-wide hidden lg:block">
                  Professional Trading
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50/80"
                    } group-hover:transform group-hover:scale-105`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Packages Dropdown */}
                  {item.hasDropdown && item.name === "Packages" && (
                    <div className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 mt-2">
                      <div className="p-2">
                        {packageDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={`block px-4 py-3 text-sm rounded-xl transition-colors ${
                              isPackageDropdownActive(dropdownItem.href)
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/20 m-4 rounded-2xl shadow-xl">
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                    } transform hover:scale-105`}
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </Link>

                  {/* Mobile Packages Dropdown */}
                  {item.hasDropdown && item.name === "Packages" && (
                    <div className="mt-2 ml-4 space-y-2">
                      {packageDropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                            isPackageDropdownActive(dropdownItem.href)
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;
