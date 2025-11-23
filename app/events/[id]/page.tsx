"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/content/events")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          // Sort by date (newest first)
          const sorted = data.data.sort((a: Event, b: Event) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setEvents(sorted);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="pt-32 pb-20 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Club <span className="text-orange-500">Events</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Loading events...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white">
            Club <span className="text-orange-500">Events</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join us for exciting tournaments, training camps, award ceremonies, and community gatherings
          </p>
        </motion.div>

        {/* Events Grid */}
        {events.length === 0 ? (
          <div className="text-center py-20">
            <Calendar size={80} className="mx-auto text-gray-400 mb-6" />
            <p className="text-2xl text-gray-500">No events scheduled yet.</p>
            <p className="text-gray-400 mt-2">Check back soon for updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/events/${event._id}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl border border-gray-200 dark:border-gray-800">
                    {/* Image */}
                    {event.image ? (
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="h-64 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                        <Calendar size={80} className="text-white opacity-30" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-orange-500 font-semibold mb-3">
                        <Calendar size={18} />
                        <span>{new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-500 transition">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-orange-500 font-semibold flex items-center gap-2">
                          View Details
                          <ArrowRight size={18} className="group-hover:translate-x-2 transition" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-orange-500 hover:text-orange-600 font-semibold text-lg transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}