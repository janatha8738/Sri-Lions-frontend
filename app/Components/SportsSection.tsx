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
    <section ref={ref} className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">

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
            className="text-red-600 text-lg font-black uppercase tracking-widest mb-3"
          >
            SIRI LIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
          >
            OUR SPORTS
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="h-2 bg-red-600 rounded-full mx-auto"
          />
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {sportsPrograms.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-800 shadow-2xl"
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-72 lg:h-80 overflow-hidden">
                <motion.img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Dark Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/50"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.75 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated Orange Corner Triangle */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={hoveredCard === program.id ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="absolute top-0 right-0 w-20 h-20"
                >
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-t-transparent border-r-red-600" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.h3
                  initial={{ y: 20 }}
                  animate={isInView ? { y: 0 } : {}}
                  className="text-white text-3xl lg:text-4xl font-black mb-3 tracking-wider"
                >
                  {program.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredCard === program.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-200 text-base leading-relaxed max-w-xs"
                >
                  {program.description}
                </motion.p>

                {/* Animated Bottom Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={hoveredCard === program.id ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mt-6 h-1.5 bg-red-600 rounded-full"
                />
              </div>

              {/* Border Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ boxShadow: "0 0 0 0px transparent" }}
                whileHover={{ boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 px-16 rounded-full shadow-2xl transition-all duration-300"
          >
            EXPLORE ALL PROGRAMS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}