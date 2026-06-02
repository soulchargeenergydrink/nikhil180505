import { motion } from "framer-motion";
import heroCan from "../assets/images/hero/hero-triple-can.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0b1025] to-black" />

      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600 blur-[150px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[8px] text-gray-400"
          >
            COMEBACK MODE
          </motion.p>

          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl leading-none"
          >
            FUEL YOUR
            <br />
            COMEBACK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-gray-300 text-lg max-w-xl"
          >
            Premium energy for people who refuse
            to stay down.
          </motion.p>

          <div className="mt-10 flex gap-4">

            <button className="px-8 py-4 bg-blue-600 rounded-xl font-bold hover:scale-105 transition">
              CHARGE UP
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-xl">
              EXPLORE
            </button>

          </div>

        </div>

        <motion.div
          animate={{
            y: [-15, 15, -15]
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
        >
          <img
            src={heroCan}
            alt="SoulCharge"
            className="w-full max-w-3xl mx-auto"
          />
        </motion.div>

      </div>

    </section>
  );
}