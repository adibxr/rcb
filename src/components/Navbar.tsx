
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Set dark mode as default

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode on initial load and when toggled
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Set dark mode on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-rcb-black/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">RCB</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium text-gray-700 hover:text-rcb-red dark:text-gray-300 dark:hover:text-rcb-red transition-colors">
            Home
          </a>
          <a href="#players" className="text-sm font-medium text-gray-700 hover:text-rcb-red dark:text-gray-300 dark:hover:text-rcb-red transition-colors">
            Players
          </a>
          <a href="#matches" className="text-sm font-medium text-gray-700 hover:text-rcb-red dark:text-gray-300 dark:hover:text-rcb-red transition-colors">
            Matches
          </a>
          <a href="#app" className="text-sm font-medium text-gray-700 hover:text-rcb-red dark:text-gray-300 dark:hover:text-rcb-red transition-colors">
            RCB App
          </a>
          <a href="#merchandise" className="text-sm font-medium text-gray-700 hover:text-rcb-red dark:text-gray-300 dark:hover:text-rcb-red transition-colors">
            Merchandise
          </a>
          <a href="#fans" className="text-sm font-medium text-gray-700 hover:text-rcb-red dark:text-gray-300 dark:hover:text-rcb-red transition-colors">
            Fan Zone
          </a>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button 
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors hidden md:block"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          
          <button 
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          
          <Button 
            className="bg-rcb-red hover:bg-rcb-red/90 text-white hidden md:block"
            size="sm"
          >
            Buy Tickets
          </Button>
          
          <button 
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-white/90 dark:bg-rcb-black/90 backdrop-blur-md space-y-1 border-t dark:border-gray-800">
          <a href="#home" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-rcb-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-rcb-red rounded-md transition-colors">
            Home
          </a>
          <a href="#players" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-rcb-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-rcb-red rounded-md transition-colors">
            Players
          </a>
          <a href="#matches" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-rcb-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-rcb-red rounded-md transition-colors">
            Matches
          </a>
          <a href="#app" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-rcb-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-rcb-red rounded-md transition-colors">
            RCB App
          </a>
          <a href="#merchandise" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-rcb-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-rcb-red rounded-md transition-colors">
            Merchandise
          </a>
          <a href="#fans" className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-rcb-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-rcb-red rounded-md transition-colors">
            Fan Zone
          </a>
          <Button 
            className="w-full mt-4 bg-rcb-red hover:bg-rcb-red/90 text-white"
          >
            Buy Tickets
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
