import React from 'react';
import { motion } from 'framer-motion';
import coffeeEnergy from '../assets/images/ingredients/coffee-energy.png';

export default function ComebackCoffee() {
  const ingredients = [
    {
      title: "Caffeine",
      desc: "Every comeback needs energy to rise again. Caffeine boosts alertness, focus, and drive when it matters most. Built for the moments when giving up isn’t an option."
    },
    {
      title: "Taurine",
      desc: "Taurine helps support endurance and performance. Works with caffeine to keep you active for longer hours. Made for people who keep pushing forward."
    },
    {
      title: "Vitamins",
      desc: "Loaded with Vitamins B2, B3, B6, and B12. Helps support energy metabolism and reduce fatigue. Because strong comebacks start from within."
    }
  ];

  return (
    <div className="min-h-screen bg-brandBlack pt-36 pb-24 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto space-y-14 w-full">
        
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight uppercase text-white leading-none">
            COMEBACK COFFEE
          </h1>
          <div className="h-[3px] w-20 bg-gradient-to-r from-brandPurple to-brandMagenta mx-auto rounded" />
        </div>

        {/* Unified Overlapping Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Ingredients Stack (Takes 6/12 Columns) */}
          <div className="lg:col-span-6 space-y-6 z-10">
            {ingredients.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-brandDarkGray/90 backdrop-blur-sm border border-brandPurple/10 rounded-xl p-6 shadow-xl lg:-mr-16 relative hover:border-brandMagenta/30 transition-all group"
              >
                <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-brandPurple tracking-wide group-hover:text-brandMagenta transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light mt-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: High-Octane Merged Banner Frame (Takes 6/12 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-6 w-full border-2 border-brandPurple/10 p-2 bg-brandDarkGray rounded-2xl shadow-2xl overflow-hidden group"
          >
            <div className="relative overflow-hidden rounded-xl">
              {/* Purple Vignette Layer overlaying image to match backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              <img 
                src={coffeeEnergy} 
                alt="Coffee Energy Formulation" 
                className="w-full h-auto object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none" 
              />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}