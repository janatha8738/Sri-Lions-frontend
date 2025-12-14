"use client";

import { useState, useRef } from "react";
import { Calendar, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const dummyNews = {
  featured: {
    id: "1",
    title: "Siri Lions Dominate National Sevens Championship",
    description: "The Lions secure their third consecutive title with a flawless performance in the finals, showcasing unmatched speed, strategy, and team unity on the field.",
    date: "10 DEC",
    category: "RUGBY CHAMPIONS"
  },
  trending: [
    {
      id: "2",
      title: "Lions Unveil New Outdoor Training Facility",
      date: "Dec 5, 2025",
      category: "CLUB NEWS"
    },
    {
      id: "3",
      title: "Youth Academy Players Called Up to National Squad",
      date: "Dec 1, 2025",
      category: "DEVELOPMENT"
    },
    {
      id: "4",
      title: "Lions Announce Pre-Season Tour to Australia",
      date: "Nov 28, 2025",
      category: "INTERNATIONAL"
    }
  ]
};

export default function NewsSection() {
  const [featured] = useState(dummyNews.featured);
  const [trending] = useState(dummyNews.trending);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="px-4 sm:px-8 lg:px-16 text-white">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-4xl"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-3 tracking-tight">
            LATEST NEWS
          </h2>
          <div className="h-1 w-32 bg-emerald-600 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20"
        >

          {/* FEATURED CARD */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[420px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-black"
            >
              {/* Featured rugby image */}
              <img
                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80"
                alt="Rugby Championship"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-black/50 to-black/20" />

              <motion.span
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="absolute top-8 left-8 bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-black uppercase tracking-wider shadow-lg"
              >
                {featured.category}
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute bottom-0 left-0 right-0 p-10 space-y-4"
              >
                <div className="flex items-center gap-3 text-amber-500 font-black text-xl">
                  <span className="text-6xl">{featured.date.split(' ')[0]}</span>
                  <span className="text-2xl mt-4">{featured.date.split(' ')[1]}</span>
                </div>
                <h3 className="text-white text-3xl sm:text-4xl font-black leading-tight">
                  {featured.title}
                </h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-xl">
                  {featured.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TRENDING ITEMS */}
          <div className="space-y-8">
            {trending.map((item, index) => {
              const images = [
                "https://images.unsplash.com/photo-1567491397391-c6ef14751e4e?w=400&q=80",
                "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&q=80",
                "https://images.unsplash.com/photo-1596656407779-cd99279a517c?w=400&q=80"
              ];
              return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ x: 12, scale: 1.02 }}
                className="flex gap-5 group cursor-pointer bg-rose-950/30 backdrop-blur-sm p-5 rounded-2xl border border-rose-800/30 hover:border-amber-500/50 transition-all duration-400"
              >
                {/* Photo Area */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-36 h-36 sm:w-44 sm:h-36 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={images[index]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
                </motion.div>

                <div className="flex-1 flex flex-col justify-center space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-amber-500 font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-gray-300 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-white text-xl font-bold leading-tight group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            );
            })}
          </div>
        </motion.div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(245, 158, 11, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-black py-5 px-12 rounded-full text-xl shadow-2xl shadow-amber-500/50 transition-all duration-300"
          >
            <TrendingUp className="w-7 h-7" />
            VIEW ALL NEWS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}