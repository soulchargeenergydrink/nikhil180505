import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Comeback Coffee', path: '/comeback-coffee' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brandBlack/85 backdrop-blur-md border-b border-white/5 px-8 md:px-14 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Medium-Upscaled Logo */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="text-2xl sm:text-3xl font-display font-black uppercase tracking-[0.22em] text-white hover:text-brandPurple transition-colors duration-200"
        >
          soulcharge
        </Link>

        {/* Medium-Upscaled Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm sm:text-base font-bold uppercase tracking-[0.18em] transition-colors duration-300 relative py-1 ${
                isActive(link.path) ? 'text-brandPurple' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div 
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brandPurple"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-brandPurple transition-colors focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-brandBlack/95 border-b border-white/10 flex flex-col p-8 space-y-5 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-display font-bold uppercase tracking-widest ${
                  isActive(link.path) ? 'text-brandPurple' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}