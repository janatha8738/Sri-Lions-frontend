'use client';

import { Star } from "lucide-react";

type Player = {
  name: string;
  position: string;
  image: string;
};

const coachingStaff = {
  name: "Osea Kolinisau",
  role: "Head Coach",
  subtitle: "2016 Olympic Gold Medal Captain – Fiji",
  achievements: "Dubai 7s 2023 Coach | Fiji 7s Head Coach 2024",
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop&crop=face",
};

const players: Player[] = [
  { name: "Scott Barrett", position: "LOCK", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=1000&fit=crop&crop=face" },
  { name: "George Bell", position: "HOOKER", image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800&h=1000&fit=crop&crop=face" },
  { name: "Toby Bell", position: "MIDFIELD", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&h=1000&fit=crop&crop=face" },
  { name: "Jack Brown", position: "LOCK", image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=1000&fit=crop&crop=face" },
  { name: "Mike Wilson", position: "WING", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&h=1000&fit=crop&crop=face" },
  { name: "Tom Davis", position: "FULLBACK", image: "https://images.unsplash.com/photo-1582821419129-c714a4664d1e?w=800&h=1000&fit=crop&crop=face" },
];

export default function SquadSection() {
  return (
    <section id="players" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Meet The Team</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Squad & Coaching Staff
          </h2>
          <p className="text-xl text-gray-400">Led by Olympic Gold Medal Winner</p>
        </div>

        {/* Players Grid - Exact layout matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, i) => (
            <div key={i} className="relative">
              {/* Player Image with white/light gray background */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={player.image} 
                  alt={player.name} 
                  className="w-full h-full object-cover object-center opacity-100 hover:opacity-100 transition-none pointer-events-auto"
                />
              </div>
              
              {/* Player Info Below Image */}
              <div className="text-left">
                <h3 className="text-3xl font-black text-white mb-1 tracking-tight">
                  {player.name}
                </h3>
                <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                  {player.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}