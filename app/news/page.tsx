"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// -------------------------
// Dummy News Data
// Replace with API later
// -------------------------
const allNews = [
  { id: "1", title: "Tech Innovations Shaping 2025", description: "From AI to Web3, explore how emerging technologies are transforming industries across the globe.", image: "/news1.png" },
  { id: "2", title: "SLIIT Launches New IT Program", description: "The program aims to produce industry-ready graduates skilled in cloud computing and full-stack development.", image: "/news2.png" },
  { id: "3", title: "Developers Embrace Next.js 15", description: "Next.js continues to redefine frontend performance with powerful server-side rendering features.", image: "/news3.png" },
  { id: "4", title: "AI Ethics Framework Introduced Globally", description: "A new international initiative ensures that artificial intelligence technologies are developed responsibly.", image: "/news4.png" },
  { id: "5", title: "Quantum Computing Gets Real", description: "Tech giants announce breakthroughs bringing quantum computing closer to practical use cases.", image: "/news5.png" },
  { id: "6", title: "New Mobile App Trends 2025", description: "Mobile development continues to evolve with AI-powered apps.", image: "/news6.png" },
  { id: "7", title: "Cloud Computing Advances", description: "Cloud services become faster, more secure, and more scalable.", image: "/news7.png" },
];

// -------------------------
// Variants for animations
// -------------------------
const containerVariants = {
  hidden: { opacity: 0 }, // ✅ added opacity
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function NewsPage() {
  const [news, setNews] = useState(allNews.slice(0, 6));
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [isFetching, setIsFetching] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // -------------------------
  // Infinite Scroll
  // -------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          setIsFetching(true);
          setTimeout(() => {
            const nextPage = page + 1;
            const start = (nextPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            if (start < allNews.length) {
              setNews((prev) => [...prev, ...allNews.slice(start, end)]);
              setPage(nextPage);
            }
            setIsFetching(false);
          }, 700);
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [page, isFetching]);

  return (
    <section className="pt-32 sm:pt-40 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      {/* Page Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          All <span className="text-orange-500">News</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
          Explore all our announcements, updates, and technology stories.
        </p>
      </div>

      {/* News Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {news.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
          >
            <Link href={`/news/${item.id}`}>
              <div className="relative w-full h-60 sm:h-72">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Loading More */}
      <div ref={loadMoreRef} className="mt-10 flex justify-center">
        {isFetching && (
          <motion.div
            className="text-gray-600 dark:text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading more...
          </motion.div>
        )}
      </div>
    </section>
  );
}
