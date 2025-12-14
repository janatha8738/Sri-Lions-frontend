"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const sportsPrograms = [
  {
    id: "1",
    title: "RUGBY",
    description: "Build strength, teamwork, and strategic thinking through intense rugby training sessions designed for all skill levels.",
    image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "NETBALL",
    description: "Enhance your agility, coordination, and team play with comprehensive netball training programs for competitive athletes.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "FOOTBALL",
    description: "Master ball control, tactics, and fitness with professional football coaching tailored to elevate your game.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    title: "HOCKEY",
    description: "Develop speed, precision, and endurance through structured hockey training focused on technical excellence.",
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800&h=600&fit=crop"
  },
  {
    id: "5",
    title: "GOLF",
    description: "Perfect your swing, improve accuracy, and master course strategy with personalized golf instruction programs.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop"
  },
  {
    id: "6",
    title: "BADMINTON",
    description: "Improve reflexes, footwork, and shot accuracy with dynamic badminton training for competitive and recreational players.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop"
  }
];

export default function SportsPrograms() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0a0a] overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-rose-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-emerald-700 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-amber-500 text-lg font-black uppercase tracking-widest mb-3"
          >
            SIRI LIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
          >
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-800">SPORTS</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="h-2 bg-gradient-to-r from-emerald-600 via-amber-500 to-rose-800 rounded-full mx-auto"
          />
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {sportsPrograms.map((program, index) => {
            // Alternate colors for variety
            const colors = [
              { corner: "rose-800", bar: "rose-800", shadow: "rgba(190, 18, 60, 0.6)" },
              { corner: "emerald-600", bar: "emerald-600", shadow: "rgba(5, 150, 105, 0.6)" },
              { corner: "amber-500", bar: "amber-500", shadow: "rgba(245, 158, 11, 0.6)" }
            ];
            const colorScheme = colors[index % 3];

            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/90 shadow-2xl border-2 border-gray-800/50"
                onMouseEnter={() => setHoveredCard(program.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <motion.img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15, rotate: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Dark Overlay with Color Tint */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-${colorScheme.corner}/20`}
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Animated Corner Triangle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={hoveredCard === program.id ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="absolute top-0 right-0 w-24 h-24"
                  >
                    <div className={`absolute top-0 right-0 w-0 h-0 border-t-[96px] border-r-[96px] border-t-transparent border-r-${colorScheme.corner} shadow-lg`} />
                  </motion.div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.h3
                    initial={{ y: 20 }}
                    animate={isInView ? { y: 0 } : {}}
                    className={`text-white text-3xl lg:text-4xl font-black mb-3 tracking-wider drop-shadow-2xl group-hover:text-${colorScheme.corner} transition-colors duration-300`}
                  >
                    {program.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredCard === program.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-100 text-base leading-relaxed max-w-xs font-medium"
                  >
                    {program.description}
                  </motion.p>

                  {/* Animated Bottom Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={hoveredCard === program.id ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`mt-6 h-2 bg-${colorScheme.bar} rounded-full shadow-lg`}
                  />
                </div>

                {/* Border Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ boxShadow: "0 0 0 0px transparent" }}
                  whileHover={{ boxShadow: `0 0 30px ${colorScheme.shadow}` }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white font-black text-xl py-6 px-16 rounded-full shadow-2xl transition-all duration-300 border-2 border-amber-400/50"
          >
            EXPLORE ALL PROGRAMS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}