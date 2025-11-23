"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type EventItem = {
  id: string;
  title: string;
  description: string;
  date?: string;
  image?: string;
  createdAt?: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const API_URL = "http://localhost:4000/api/content/events";

  const fetchEvents = async (pageNum: number) => {
    try {
      setIsFetching(true);
      const res = await fetch(`${API_URL}?page=${pageNum}&limit=6`);
      const data = await res.json();

      if (data.success && data.data) {
        const newItems = data.data;
        if (pageNum === 1) {
          setEvents(newItems);
        } else {
          setEvents((prev) => [...prev, ...newItems]);
        }
        setHasMore(newItems.length === 6);
      }
    } catch (err) {
      console.error("Failed to fetch events:", err);
    } finally {
      setIsFetching(false);
      if (pageNum === 1) setLoadingInitial(false);
    }
  };

  // Initial load
  useEffect(() => {
    const loadInitial = async () => {
      await fetchEvents(1);
    };
    loadInitial();
  }, []);

  // Infinite scroll
  useEffect(() => {
    if (loadingInitial || !hasMore || isFetching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && hasMore) {
          const nextPage = page + 1;
          fetchEvents(nextPage).then(() => {
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
  }, [page, hasMore, isFetching, loadingInitial]);

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
        <p className="text-2xl text-gray-600 dark:text-gray-400">Loading events...</p>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section className="pt-32 sm:pt-40 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            All <span className="text-orange-500">Events</span>
          </h1>
          <p className="text-2xl text-gray-500">No events scheduled yet.</p>
          <p className="text-gray-400 mt-4">Check back soon for exciting club activities!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 sm:pt-40 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          All <span className="text-orange-500">Events</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
          Join us for sports, charity, community service, and celebration events.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {events.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            <Link href={`/events/${item.id}`}>
              <div className="relative w-full h-60 sm:h-72">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-orange-400 to-pink-600 h-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">EVENT</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {item.date && (
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}

                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {item.description}
                </p>

                {item.createdAt && (
                  <p className="text-xs text-gray-400 mt-4">
                    Posted: {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Trigger */}
      <div ref={loadMoreRef} className="h-10 mt-10" />

      {/* Loading More */}
      {isFetching && (
        <div className="text-center py-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Loading more events...
          </motion.p>
        </div>
      )}

      {!hasMore && events.length > 6 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">That's all the events for now!</p>
        </div>
      )}
    </section>
  );
}