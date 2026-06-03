import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', hash: '#home', id: 'home' },
    { name: 'Comeback Coffee', hash: '#comeback-coffee', id: 'comeback-coffee' },
    { name: 'About', hash: '#about', id: 'about' },
    { name: 'Contact', hash: '#contact', id: 'contact' }
  ];

  // Robust visibility tracking engine
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize positioning immediately on load
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 md:px-14 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <a 
          href="#home" 
          onClick={() => setIsOpen(false)}
          className="text-2xl sm:text-3xl font-display font-black uppercase tracking-[0.22em] text-gray-900 hover:text-brandPurple transition-colors duration-200"
        >
          soulcharge
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.hash}
                className={`text-sm sm:text-base font-bold uppercase tracking-[0.18em] transition-all duration-300 py-1 relative group ${
                  isActive ? 'text-brandPurple' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brandPurple to-brandMagenta transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
                }`} />
              </a>
            );
          })}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 hover:text-brandPurple transition-colors focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-8 space-y-5 md:hidden shadow-xl"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.hash}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-display font-bold uppercase tracking-widest transition-colors border-l-4 pl-4 ${
                    isActive ? 'text-brandPurple border-brandPurple bg-gray-50' : 'text-gray-700 border-transparent hover:text-brandPurple'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}