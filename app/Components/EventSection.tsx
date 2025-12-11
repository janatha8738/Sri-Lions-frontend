"use client";

import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const rugbyEvents = [
  {
    id: "1",
    title: "SIX NATIONS 2026 OPENER",
    date: "February 7, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1575368643250-2e27e2be8f7e?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "PREMIERSHIP RUGBY FINAL",
    date: "June 20, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "SEVENS WORLD SERIES CAPE TOWN",
    date: "December 12-13, 2026",
    category: "RUGBY SEVENS",
    image: "https://images.unsplash.com/photo-1621109731188-7c27d3526058?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    title: "BRITISH & IRISH LIONS TOUR",
    date: "June 28, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop"
  },
  {
    id: "5",
    title: "RUGBY WORLD CUP QUALIFIER",
    date: "September 15, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  },
  {
    id: "6",
    title: "SUPER RUGBY PACIFIC FINALS",
    date: "July 18, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1616890826967-7e2e0f5e15f0?w=800&h=600&fit=crop"
  },
  {
    id: "7",
    title: "AUTUMN NATIONS SERIES",
    date: "November 7, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?w=800&h=600&fit=crop"
  },
  {
    id: "8",
    title: "WOMEN'S SIX NATIONS",
    date: "March 21, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop"
  },
  // Duplicated for seamless infinite scroll
  {
    id: "9",
    title: "SIX NATIONS 2026 OPENER",
    date: "February 7, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1575368643250-2e27e2be8f7e?w=800&h=600&fit=crop"
  },
  {
    id: "10",
    title: "PREMIERSHIP RUGBY FINAL",
    date: "June 20, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop"
  },
  {
    id: "11",
    title: "SEVENS WORLD SERIES CAPE TOWN",
    date: "December 12-13, 2026",
    category: "RUGBY SEVENS",
    image: "https://images.unsplash.com/photo-1621109731188-7c27d3526058?w=800&h=600&fit=crop"
  },
  {
    id: "12",
    title: "BRITISH & IRISH LIONS TOUR",
    date: "June 28, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop"
  },
  {
    id: "13",
    title: "RUGBY WORLD CUP QUALIFIER",
    date: "September 15, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  },
  {
    id: "14",
    title: "SUPER RUGBY PACIFIC FINALS",
    date: "July 18, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1616890826967-7e2e0f5e15f0?w=800&h=600&fit=crop"
  },
  {
    id: "15",
    title: "AUTUMN NATIONS SERIES",
    date: "November 7, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?w=800&h=600&fit=crop"
  },
  {
    id: "16",
    title: "WOMEN'S SIX NATIONS",
    date: "March 21, 2026",
    category: "RUGBY UNION",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop"
  }
];

export default function EventsSection() {
  const [events] = useState(rugbyEvents);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header - Centered */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Upcoming Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the intensity of international and club rugby tournaments
          </p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          <div className="flex animate-scroll-left hover:pause-scroll gap-6">
            {events.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="flex-none w-80 group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 rounded-xl" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button - Centered */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50">
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}