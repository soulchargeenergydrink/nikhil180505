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
    <div className="min-h-screen bg-brandBlack pt-36 pb-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
      
      {/* Absolute Layer Watermark - Fully Contrast Corrected for Light Mode */}
      <div className="absolute inset-x-0 top-24 flex justify-center z-0 select-none pointer-events-none">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tight text-center watermark-text opacity-40 leading-none">
          COMEBACK<br className="sm:hidden" /> COFFEE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto space-y-14 w-full relative z-10 mt-6">
        
        {/* Section Header - High Contrast Dark Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight uppercase text-gray-900 leading-none">
            COMEBACK COFFEE
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-brandPurple to-brandMagenta mx-auto rounded" />
        </div>

        {/* Content Splitting Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Cards Stack Column with Micro-Interactions */}
          <div className="lg:col-span-6 space-y-6 z-10">
            {ingredients.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
                whileHover={{ x: 8, scale: 1.01 }}
                className="bg-white border border-gray-200/60 rounded-xl p-6 light-card-shadow lg:-mr-16 relative hover:border-brandPurple/40 transition-all group cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-brandPurple tracking-wide group-hover:text-brandMagenta transition-colors flex items-center space-x-2">
                  <span>•</span> <span>{item.title}</span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Product Graphic Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-6 w-full border border-gray-200 p-2 bg-white rounded-2xl light-card-shadow overflow-hidden group z-0"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={coffeeEnergy} 
                alt="Coffee Energy Formulation" 
                className="w-full h-auto object-cover opacity-95 group-hover:scale-102 transition-transform duration-700 select-none pointer-events-none" 
              />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}