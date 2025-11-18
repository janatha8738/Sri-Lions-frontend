"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Tech Innovations Shaping 2025",
    description:
      "From AI to Web3, explore how emerging technologies are transforming industries across the globe.",
    image: "/news1.png",
  },
  {
    id: 2,
    title: "SLIIT Launches New IT Program",
    description:
      "The program aims to produce industry-ready graduates skilled in cloud computing and full-stack development.",
    image: "/news2.png",
  },
  {
    id: 3,
    title: "Developers Embrace Next.js 15",
    description:
      "Next.js continues to redefine frontend performance with powerful server-side rendering features.",
    image: "/news3.png",
  },
];

export default function NewsSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Duplicate multiple times to ensure continuous loop
  const repeatedCards = isDesktop
    ? [...newsData, ...newsData, ...newsData]
    : newsData;

  return (
    <section
      className="py-16 px-2 sm:px-40 bg-gray-50 dark:bg-[#0a0a0a]"
      id="news"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Latest <span className="text-orange-500">News</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Stay updated with our latest announcements and updates
        </p>
      </div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8"
          animate={isDesktop ? { x: ["0%", "-100%"] } : { x: "0%" }}
          transition={
            isDesktop
              ? {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25, // slower = smoother
                    ease: "linear",
                  },
                }
              : {}
          }
        >
          {repeatedCards.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden min-w-[300px] sm:min-w-[250px]"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
