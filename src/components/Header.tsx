import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-xl font-light text-black hover:text-gray-600 transition-colors font-poppins">
            Sarah Chen
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors font-poppins ${
                  location.pathname === item.path || (item.path === '/projects' && location.pathname.startsWith('/projects'))
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:hello@sarahchen.design"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors font-poppins"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm font-medium transition-colors font-poppins ${
                  location.pathname === item.path || (item.path === '/projects' && location.pathname.startsWith('/projects'))
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:hello@sarahchen.design"
              className="block py-3 text-sm font-medium text-gray-600 hover:text-black transition-colors font-poppins"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;