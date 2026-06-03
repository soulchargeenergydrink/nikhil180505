import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', hash: '#home' },
    { name: 'Comeback Coffee', hash: '#comeback-coffee' },
    { name: 'About', hash: '#about' },
    { name: 'Contact', hash: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brandBlack/85 backdrop-blur-md border-b border-white/5 px-8 md:px-14 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Branding Title Link */}
        <a 
          href="#home" 
          onClick={() => setIsOpen(false)}
          className="text-2xl sm:text-3xl font-display font-black uppercase tracking-[0.22em] text-white hover:text-brandPurple transition-colors duration-200"
        >
          soulcharge
        </a>

        {/* Desktop Anchor Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              className="text-sm sm:text-base font-bold uppercase tracking-[0.18em] text-gray-400 hover:text-white transition-colors duration-300 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-brandPurple transition-colors focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Slide-Down Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-brandBlack/95 border-b border-white/10 flex flex-col p-8 space-y-5 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-bold uppercase tracking-widest text-gray-300 hover:text-brandPurple transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}