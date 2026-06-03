import React from 'react';
import { motion } from 'framer-motion';
import tripleCan from '../assets/images/hero/hero-triple-can.png'; 

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brandBlack text-white flex flex-col justify-center items-center overflow-hidden px-8 pt-28 pb-16">
      
      {/* Atmospheric Radial Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brandBlue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brandMagenta/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto text-center z-10 flex flex-col items-center max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-3 select-none"
        >
          <span className="text-sm sm:text-base md:text-xl tracking-[0.45em] text-brandPurple font-bold uppercase block font-display">
            Fuel Your Comeback , Comeback Energy Drink
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight leading-none text-white">
            SOULCHARGE
          </h1>
        </motion.div>

        {/* Dynamic Can Fitting Box */}
        <motion.div 
          className="my-6 w-full max-w-[320px] sm:max-w-[550px] md:max-w-[680px] drop-shadow-[0_0_50px_rgba(139,38,239,0.3)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 1.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <img 
            src={tripleCan} 
            alt="SoulCharge 3 Cans" 
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </motion.div>

        {/* Content Action Sub-block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center space-y-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-wider text-gray-200 max-w-4xl px-4 leading-normal">
            World’s First <span className="text-brandMagenta text-glow-purple">Comeback</span> Energy Drink
          </p>
          
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a 
              href="#contact"
              className="px-10 py-4 bg-gradient-to-r from-brandPurple to-brandMagenta text-white font-display font-bold uppercase tracking-[0.2em] text-sm sm:text-base hover:brightness-110 transition-all shadow-xl block rounded"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}