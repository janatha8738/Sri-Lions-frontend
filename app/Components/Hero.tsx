"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const header = document.querySelector("header");
      const navbar = document.querySelector("nav");
      const totalHeight =
        (header?.clientHeight || 0) + (navbar?.clientHeight || 0);
      setOffset(totalHeight);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/heronew.jpg')",
        height: `calc(100vh - ${offset}px)`,
        marginTop: "126px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-lg sm:text-xl mb-2 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Welcome to <span className="font-bold text-[#ffcccc]">Sri Lions</span>
        </motion.h2>

        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          ROAR LOUD, ROAR PROUD
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            href="/news"
            className="bg-[#800000] text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#a00000] transition-all duration-300"
          >
            Latest News
          </Link>
          <Link
            href="/join"
            className="bg-white text-[#800000] px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Join Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
