"use client";

import { useState } from "react";
import { Calendar, TrendingUp } from "lucide-react";

const dummyNews = {
  featured: {
    id: "1",
    title: "The third team to win back-to-back tournaments",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam...",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop",
    date: "09 AUG",
    category: "Champions"
  },
  trending: [
    {
      id: "2",
      title: "Live cricket score of IND vs PAK, ICC World Cup",
      date: "Aug 31, 2023",
      category: "CHAMPIONS",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Real cricket fans get on a hatred train to Delhi",
      date: "Aug 3, 2023",
      category: "CHAMPIONS",
      image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=300&fit=crop"
    },
    {
      id: "4",
      title: "Australian champions take a world tour to score",
      date: "Aug 10, 2023",
      category: "CHAMPIONS",
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop"
    }
  ]
};

export default function NewsSection() {
  const [featured] = useState(dummyNews.featured);
  const [trending] = useState(dummyNews.trending);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Trending now
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Card - Left Side */}
          <div className="relative group cursor-pointer">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  {featured.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-lg mb-3">
                  <span className="text-4xl">{featured.date.split(' ')[0]}</span>
                  <span className="text-sm mt-2">{featured.date.split(' ')[1]}</span>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </div>
          </div>

          {/* Trending Items - Right Side */}
          <div className="space-y-6">
            {trending.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 p-4 rounded-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-500 text-xs font-bold tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-gray-900 dark:text-white text-lg font-bold leading-tight group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
            <TrendingUp className="w-5 h-5" />
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}