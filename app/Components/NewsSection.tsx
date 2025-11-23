"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type NewsItem = {
  _id: string;
  title: string;
  description: string;
  image?: string;
};

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch news from your backend
  useEffect(() => {
    fetch("http://localhost:4000/api/content/news")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setNews(data.data);
        }
        setLoading(false);
      })
      .catch(() => {
        console.log("Backend not connected yet — using fallback");
        setLoading(false);
      });
  }, []);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Duplicate for infinite scroll effect
  const repeatedCards = isDesktop ? [...news, ...news, ...news] : news;

  // Show loading or empty state
  if (loading) {
    return (
      <section className="py-16 px-2 sm:px-40 bg-gray-50 dark:bg-[#0a0a0a]" id="news">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Latest <span className="text-orange-500">News</span>
          </h2>
          <p className="mt-10 text-xl text-gray-500">Loading latest news...</p>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section className="py-16 px-2 sm:px-40 bg-gray-50 dark:bg-[#0a0a0a]" id="news">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Latest <span className="text-orange-500">News</span>
          </h2>
          <p className="mt-10 text-xl text-gray-500">No news available yet. Add some from Admin Panel!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-2 sm:px-40 bg-gray-50 dark:bg-[#0a0a0a]" id="news">
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
                    duration: 30,
                    ease: "linear",
                  },
                }
              : {}
          }
        >
          {repeatedCards.map((item, index) => (
            <Link href={`/news/${item._id}`} key={`${item._id}-${index}`} className="block">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden min-w-[300px] sm:min-w-[380px] cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {item.image ? (
                  <div className="relative w-full h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-200 dark:bg-gray-700 h-56 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/news"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition"
        >
          View All News →
        </Link>
      </div>
    </section>
  );
}