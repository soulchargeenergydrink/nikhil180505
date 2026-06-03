import React from 'react';
import { motion } from 'framer-motion';
import athleteImg from '../assets/images/lifestyle/athlete.png';

export default function About() {
  return (
    <div className="min-h-screen bg-brandBlack pt-36 pb-24 px-6 md:px-12 flex items-center relative overflow-hidden">
      
      {/* Background Graphic Blurs */}
      <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-brandPurple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-brandBlue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* Left Side: Overlapping Content Block (Takes up 7/12 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8 z-20"
        >
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brandPurple block mb-2 font-display">
              The Mindset
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight text-white leading-tight">
              ABOUT SOULCHARGE
            </h1>
          </div>

          <div className="space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light">
            <p className="text-white font-semibold border-l-4 border-brandMagenta pl-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-glow-purple">
              SoulCharge is a premium comeback energy drink created for people who keep pushing forward no matter the pressure.
            </p>
            
            <p className="pl-6 text-gray-400">
              Built around ambition, hustle and the comeback mindset, SoulCharge delivers bold energy with a strong identity and powerful taste.
            </p>
            
            {/* Shifted over container to overlap beautifully */}
            <div className="bg-brandDarkGray/80 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/5 tracking-wide text-gray-200 font-medium text-base sm:text-lg md:text-xl shadow-2xl lg:-mr-20 relative z-30 transition-all hover:border-brandPurple/30">
              More than just a drink, it represents the mentality of rising again, pushing harder and coming back stronger every time.
            </div>
          </div>
        </motion.div>

        {/* Right Side: Merged Lifestyle Frame (Takes up 5/12 columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="lg:col-span-5 relative group mt-8 lg:mt-0 max-w-[500px] lg:max-w-none mx-auto w-full"
        >
          {/* Neon border glow effect linking image to framework */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brandPurple to-brandMagenta rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          
          <div className="relative border border-white/10 p-2.5 bg-brandDarkGray/90 rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src={athleteImg} 
              alt="SoulCharge Hustle" 
              className="w-full h-auto object-cover rounded-xl opacity-75 group-hover:opacity-95 transition-all duration-500 scale-100 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}