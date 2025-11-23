"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type NewsItem = {
  _id: string; // Changed from 'id' to '_id'
  id?: string; // Keep for compatibility
  title: string;
  heading: string;
  description?: string;
  image?: string;
  createdAt?: string;
};

// Dummy data for testing
const dummyNews: NewsItem[] = [
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f1",
    title: "New Sports Complex Inauguration",
    heading: "State-of-the-art sports facility now open for community use",
    description: "The newly built sports complex featuring indoor courts, swimming pool, and fitness center was inaugurated by the club president.",
    image: "/images/sports-complex.jpg",
    createdAt: "2024-01-20T10:00:00.000Z"
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f2",
    title: "Annual General Meeting 2024",
    heading: "Key decisions and future plans discussed in the AGM",
    description: "Members gathered for the annual general meeting to review the year's achievements and plan upcoming activities.",
    image: "/images/agm-meeting.jpg",
    createdAt: "2024-01-15T14:30:00.000Z"
  },
  {
    _id: "65a1b2c3d4e5f6a7b8c9d0f3",
    title: "Charity Drive Success",
    heading: "Community raises over $50,000 for local shelters",
    description: "Thanks to the generous contributions from our members, we've successfully supported multiple local charities.",
    image: "/images/charity-success.jpg",
    createdAt: "2024-01-10T09:15:00.000Z"
  }
];

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [useDummyData, setUseDummyData] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const API_URL = "http://localhost:4000/api/content/news";

  // Fetch news from backend
  const fetchNews = async (pageNum: number) => {
    try {
      setIsFetching(true);
      const res = await fetch(`${API_URL}?page=${pageNum}&limit=6`);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      console.log("News API Response:", data);

      if (data.success && data.data) {
        const newItems = data.data;
        if (pageNum === 1) {
          setNews(newItems);
        } else {
          setNews((prev) => [...prev, ...newItems]);
        }
        setHasMore(newItems.length === 6);
      } else {
        throw new Error("API returned unsuccessful response");
      }
    } catch (err) {
      console.error("Failed to fetch news, using dummy data:", err);
      // Fallback to dummy data
      if (pageNum === 1) {
        setNews(dummyNews);
        setHasMore(false);
        setUseDummyData(true);
      }
    } finally {
      setIsFetching(false);
    }
  };

  // Initial load
  useEffect(() => {
    const loadInitial = async () => {
      await fetchNews(1);
      setLoadingInitial(false);
    };
    loadInitial();
  }, []);

  // Infinite scroll
  useEffect(() => {
    if (loadingInitial || !hasMore || isFetching || useDummyData) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && hasMore) {
          const nextPage = page + 1;
          fetchNews(nextPage).then(() => {
            setPage(nextPage);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [page, isFetching, hasMore, loadingInitial, useDummyData]);

  // Get the correct ID for each news item
  const getNewsId = (newsItem: NewsItem): string => {
    return newsItem._id || newsItem.id || "";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  if (loadingInitial) {
    return (
      <section className="pt-32 sm:pt-40 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600 dark:text-gray-400">Loading news...</p>
      </section>
    );
  }

  return (
    <section className="pt-32 sm:pt-40 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      {/* Debug info */}
      {useDummyData && (
        <div className="max-w-7xl mx-auto mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800 text-sm">
            Using dummy news data for testing. API might be unavailable.
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          All <span className="text-orange-500">News</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
          Explore all our announcements, updates, and club stories.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {news.map((item) => {
          const newsId = getNewsId(item);
          console.log(`Rendering news: ${item.title}, ID: ${newsId}`);
          
          return (
            <motion.div
              key={newsId}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <Link href={`/news/${newsId}`}>
                <div className="relative w-full h-60 sm:h-72">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-orange-400 to-red-600 h-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">NEWS</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {item.heading}
                  </p>
                  {item.createdAt && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Load More Trigger */}
      {hasMore && <div ref={loadMoreRef} className="h-10 mt-10" />}

      {/* Loading More */}
      {isFetching && (
        <div className="text-center py-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Loading more news...
          </motion.p>
        </div>
      )}

      {!hasMore && news.length > 6 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">You've reached the end!</p>
        </div>
      )}

      {news.length === 0 && !loadingInitial && (
        <div className="text-center py-10">
          <p className="text-2xl text-gray-500">No news available yet.</p>
          <p className="text-gray-400 mt-4">Add some from Admin Panel!</p>
        </div>
      )}
    </section>
  );
}