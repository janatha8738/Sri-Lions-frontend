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
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0a0a0a] overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header - Bold & Centered */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-amber-500 font-black text-sm uppercase tracking-widest px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30">
              🏆 What's Coming
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight">
            UPCOMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">EVENTS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-600 via-amber-500 to-rose-800 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-medium">
            Don't miss the biggest rugby events of the season
          </p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          <div className="flex animate-scroll-left hover:pause-scroll gap-8">
            {events.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="flex-none w-96 group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-amber-500 transition-all duration-500 rounded-2xl" />
                  
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1200" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-white text-3xl font-black mb-4 leading-tight group-hover:text-amber-400 transition-colors duration-500 drop-shadow-2xl">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-200 text-base font-semibold mb-4">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-3 text-amber-400 font-black text-lg">
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-rose-800 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tr-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button - Enhanced */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white font-black py-6 px-12 rounded-full text-xl transition-all duration-500 hover:scale-110 shadow-2xl shadow-amber-500/50 hover:shadow-amber-600/70 border-2 border-amber-400/50">
            <span>VIEW ALL EVENTS</span>
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}