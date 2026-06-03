import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Energy",
    description:
      "Powerful energy boost designed for your comeback moments.",
  },
  {
    number: "02",
    title: "Focus",
    description:
      "Stay sharp and locked in when performance matters.",
  },
  {
    number: "03",
    title: "Performance",
    description:
      "Built for athletes, hustlers and ambitious people.",
  },
  {
    number: "04",
    title: "Comeback Mindset",
    description:
      "More than a drink. A mentality of rising again.",
  },
];

export default function WhySoulCharge() {
  return (
    <section className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl md:text-8xl text-center mb-20">
          WHY SOULCHARGE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <motion.div
              key={item.number}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-[#111111] border border-white/10 rounded-3xl p-8 cursor-pointer"
            >
              <p className="text-blue-500 text-2xl mb-6">
                {item.number}
              </p>

              <h3 className="text-4xl mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}