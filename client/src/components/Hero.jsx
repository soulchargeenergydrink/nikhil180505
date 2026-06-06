import React from 'react';
import { motion } from 'framer-motion';
import tripleCan from '../assets/images/hero/hero-triple-can.png'; 

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brandBlack flex flex-col justify-center items-center overflow-hidden px-8 pt-28 pb-16">
      
      {/* Background Blur Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brandPurple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brandMagenta/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto text-center z-10 flex flex-col items-center max-w-6xl relative">
        
        {/* Top Header Text with Slide Down Reveal */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 z-20 relative"
        >
          <span className="text-sm sm:text-base md:text-xl tracking-[0.45em] text-brandPurple font-bold uppercase block font-display">
            Fuel Your Comeback , Comeback Energy Drink
          </span>
        </motion.div>

        {/* Giant Background Watermark with Fade In Scaling */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] font-display font-black uppercase tracking-tight watermark-text leading-none">
            SOULCHARGE
          </h1>
        </motion.div>

        {/* Central Product Showcase with Combined Entry and Infinite Hover Float */}
        <motion.div 
          className="my-6 w-full max-w-[320px] sm:max-w-[550px] md:max-w-[680px] product-can-glow z-10 relative cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -12, 0]
          }}
          transition={{
            opacity: { delay: 0.2, duration: 1, ease: "easeOut" },
            scale: { delay: 0.2, duration: 1, ease: "easeOut" },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.03, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src={tripleCan} 
            alt="SoulCharge Cans" 
            className="w-full h-auto object-contain select-none pointer-events-none mx-auto"
          />
        </motion.div>

        {/* Lower Content Block with Spring Snapping CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-8 z-20 relative"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-wider text-gray-900 max-w-4xl px-4 leading-normal">
            World’s First <span className="text-brandMagenta">Comeback</span> Energy Drink
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <a 
              href="#contact"
              className="px-10 py-4 bg-gradient-to-r from-brandPurple to-brandMagenta text-white font-display font-bold uppercase tracking-[0.2em] text-sm sm:text-base shadow-lg block rounded hover:shadow-brandPurple/20"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}