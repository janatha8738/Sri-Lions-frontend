'use client';

import { Trophy, Award, ChevronRight, Sparkles, Flag, Users } from "lucide-react";

const legacyAchievements = [
  { year: "2024", title: "International Open Men's Champions – Emirates Dubai 7s", icon: Trophy },
  { year: "2023", title: "International Open Men's Plate Champions – Dubai 7s", icon: Trophy },
  { year: "2023", title: "SLRFU Inter-Club League Division B Champions – Undefeated (Promoted to A Division)", icon: Award },
  { year: "2022", title: "Semi-Finalists – Dubai 7s International Open Men's", icon: Award },
  { year: "2021", title: "Semi-Finalists – Dubai 7s International Open Men's", icon: Award },
  { year: "2020", title: "Gulf Men's Champions – Dubai 7s", icon: Trophy },
  { year: "2019", title: "Gulf Men's Champions – Dubai 7s", icon: Trophy },
];

export default function LegacySection() {
  return (
    <section id="legacy" className="py-24 lg:py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251 191 36) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-bold tracking-wider uppercase">Championship Legacy</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 leading-tight">
            A Legacy of Firsts
          </h2>
        </div>

        {/* Introductory Description – New Addition */}
        <div className="max-w-5xl mx-auto mb-20 text-center space-y-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Flag className="w-12 h-12 text-amber-400 mb-4" />
              <p className="text-amber-300 font-semibold">Only Sri Lankan Team</p>
              <p className="text-gray-400 text-sm">in Dubai 7s International Open Men’s Category</p>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 text-amber-400 mb-4" />
              <p className="text-amber-300 font-semibold">Champions 2024</p>
              <p className="text-gray-400 text-sm">International Open Men’s – Dubai 7s</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-amber-400 mb-4" />
              <p className="text-amber-300 font-semibold">First-Ever Ladies Rugby Academy</p>
              <p className="text-gray-400 text-sm">Launched January 2024</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-lg text-gray-300 leading-relaxed space-y-5">
            <p>
              Sri Lions Rugby stands as <span className="text-amber-400 font-bold">the only Sri Lankan team</span> ever invited to compete annually in the prestigious <span className="text-white">Emirates Dubai 7s International Open Men’s Category</span> — the highest level of invitational rugby sevens in the world.
            </p>
            <p>
              From Gulf Men’s Champions in 2019 and 2020 to the historic <span className="text-amber-400 font-bold">International Open Men’s Championship victory in 2024</span>, Sri Lions has consistently raised the Sri Lankan flag on the global stage.
            </p>
            <p>
              At home, our inaugural domestic squad made history in 2023 by winning the SLRFU Division B title <span className="text-amber-400 font-bold">undefeated in their very first season</span> — earning direct promotion to the elite A-Division to compete alongside legendary clubs such as CR & FC, CH & FC, Kandy SC, and the Armed Forces.
            </p>
            <p className="text-amber-300 font-medium">
              In 2024, Sri Lions broke new ground again by launching <span className="underline decoration-amber-400">Sri Lanka’s first-ever Ladies Rugby Academy</span> — a historic step toward empowering women in rugby after 145 years of the sport in Sri Lanka.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/30 via-amber-500/70 to-amber-500/30" />

          <div className="space-y-12">
            {legacyAchievements.map((ach, i) => {
              const Icon = ach.icon;
              const isOdd = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isOdd ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-10 w-6 h-6 bg-amber-500 rounded-full border-4 border-slate-900 shadow-lg shadow-amber-500/20 z-10" />

                  {/* Card */}
                  <div className={`w-full md:w-1/2 ${isOdd ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="ml-20 md:ml-0 bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-8 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 group">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30 group-hover:scale-110 transition-transform">
                          <Icon className="w-9 h-9 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-4xl font-black text-amber-400">{ach.year}</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight group-hover:text-amber-50 transition-colors">
                            {ach.title}
                          </h3>
                        </div>
                        <ChevronRight className="w-6 h-6 text-amber-600 group-hover:text-amber-400 group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}