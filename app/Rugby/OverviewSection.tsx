// app/rugby/OverviewSection.tsx
import { Trophy, Globe, Award, Target } from "lucide-react";

export default function OverviewSection() {
  return (
    <section id="overview" className="relative py-24 lg:py-32">
      {/* Subtle full-bleed background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-900/5" />

      {/* Max-width container + centered content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center justify-items-center text-center lg:text-left">
          {/* Left Column – Text Content */}
          <div className="space-y-10 max-w-2xl">
            <div className="space-y-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 text-amber-400 font-semibold text-sm tracking-wider uppercase mb-6">
                  <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                  <span>Our Legacy</span>
                </div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                About Sri Lions
                <span className="block text-amber-400 mt-2">Rugby</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-xl text-gray-200">
                Sri Lions Rugby is an international sports organisation dedicated to raising the Sri Lankan flag on the global stage while building world-class rugby at home.
              </p>
              <p>
                We are <span className="text-amber-400 font-semibold">the only Sri Lankan team</span> competing annually in the <span className="text-white font-medium">Emirates Dubai 7s International Open Men’s</span> category — crowned <span className="text-amber-400 font-semibold">Champions in 2024</span>.
              </p>
              <p>
                In 2023 our domestic team won the SLRFU Division B title undefeated and earned promotion to the top-tier A-Division in 2024.
              </p>
            </div>

            {/* Stat bar – centered on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-800">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-amber-400">15+</div>
                <div className="text-sm text-gray-500">Years Excellence</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-800" />
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-amber-400">100%</div>
                <div className="text-sm text-gray-500">Dedication</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-800" />
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-amber-400">Global</div>
                <div className="text-sm text-gray-500">Recognition</div>
              </div>
            </div>
          </div>

          {/* Right Column – Stats Grid (centered on all screens) */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none">
            {/* Main Champion Card */}
            <div className="col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-amber-400/10 rounded-xl">
                    <Trophy className="w-10 h-10 text-amber-400" />
                  </div>
                  <Award className="w-6 h-6 text-amber-400/40" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-6xl font-black bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    2024
                  </div>
                  <div className="text-xl font-semibold text-white">Dubai 7s Champions</div>
                  <p className="text-gray-400 text-sm">International Open Men's Category</p>
                </div>
              </div>
            </div>

            {/* Secondary Cards */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-amber-500/30 transition-all">
                <Globe className="w-8 h-8 text-amber-400 mb-4 mx-auto lg:mx-0" />
                <div className="text-2xl font-bold text-white text-center lg:text-left">Only SL</div>
                <div className="text-3xl font-black text-amber-400 mb-2 text-center lg:text-left">Team</div>
                <p className="text-gray-400 text-sm text-center lg:text-left">in Dubai 7s Open Men's</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-amber-500/30 transition-all">
                <Target className="w-8 h-8 text-amber-400 mb-4 mx-auto lg:mx-0" />
                <div className="text-2xl font-bold text-white text-center lg:text-left">Top Tier</div>
                <div className="text-3xl font-black text-amber-400 mb-2 text-center lg:text-left">A-Div</div>
                <p className="text-gray-400 text-sm text-center lg:text-left">SLRFU Promotion 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}