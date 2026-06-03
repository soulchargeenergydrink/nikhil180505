import React from 'react';
import { motion } from 'framer-motion';
import athleteImg from '../assets/images/lifestyle/athlete.png';

export default function About() {
  return (
    <div className="min-h-screen bg-brandBlack pt-36 pb-24 px-6 md:px-12 flex items-center relative overflow-hidden">
      
      {/* Absolute Layer Watermark */}
      <div className="absolute inset-x-0 top-24 flex justify-center z-0 select-none pointer-events-none">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-display font-black tracking-tight watermark-text opacity-40">
          ABOUT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 mt-10">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 z-20"
        >
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brandPurple block mb-2 font-display">
              The Mindset
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-gray-900">
              ABOUT SOULCHARGE
            </h2>
          </div>

          <div className="space-y-6 text-gray-900 text-base sm:text-lg md:text-xl leading-relaxed">
            <p className="font-extrabold border-l-4 border-brandMagenta pl-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900">
              SoulCharge is a premium comeback energy drink created for people who keep pushing forward no matter the pressure.
            </p>
            
            <p className="pl-6 text-gray-700 font-medium">
              Built around ambition, hustle and the comeback mindset, SoulCharge delivers bold energy with a strong identity and powerful taste.
            </p>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 tracking-wide text-gray-900 font-bold text-base sm:text-lg md:text-xl light-card-shadow lg:-mr-20 relative z-30 transition-all">
              More than just a drink, it represents the mentality of rising again, pushing harder and coming back stronger every time.
            </div>
          </div>
        </motion.div>

        {/* Right Side Image Overlap Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="lg:col-span-5 relative group mt-8 lg:mt-0 max-w-[500px] lg:max-w-none mx-auto w-full z-10"
        >
          <div className="relative border border-gray-200 p-2.5 bg-white rounded-2xl light-card-shadow overflow-hidden">
            <img 
              src={athleteImg} 
              alt="SoulCharge Hustle" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}