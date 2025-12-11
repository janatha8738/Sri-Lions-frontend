"use client";

import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const dummyEvents = [
  {
    id: "1",
    title: "WHITE KEEP ASSAULT",
    date: "September 14, 2021",
    category: "ESPORTS",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "DOTA 2 TOURNAMENT",
    date: "September 14, 2021",
    category: "ESPORTS",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "WINNERS ON ESL PRO",
    date: "September 14, 2021",
    category: "ESPORTS",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop"
  }
];

export default function EventsSection() {
  const [events] = useState(dummyEvents);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-400 text-lg">
              Join us for exciting gaming tournaments and competitions
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-all duration-300 rounded-xl" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-bold mb-3 leading-tight group-hover:text-red-500 transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex items-center gap-2 text-red-500 font-semibold">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50">
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}