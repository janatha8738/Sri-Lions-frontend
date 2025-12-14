// app/legacy-details/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Trophy, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Our Legacy — Siri Lions RFC",
};

export default function LegacyDetails() {
  return (
    <main className="pt-32 pb-20 px-4 sm:px-16 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-500 font-semibold mb-8 transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        {/* PAGE CARD */}
        <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">

          {/* HERO IMAGE */}
          <div className="relative w-full h-96 md:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1509611881826-d2ee27079fac?w=1600&h=900&fit=crop"
              alt="Siri Lions pack"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="relative -mt-32 md:-mt-40 mx-6 md:mx-12 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">

            {/* HEADER + STATS */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

              {/* TITLE + INTRO (with TEAM IMAGE above title) */}
              <div className="max-w-2xl">

                {/* TEAM IMAGE ABOVE TITLE */}
                <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/legacy/team.jpg"
                    alt="Sri Lions Team"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                  OUR <span className="text-red-600">LEGACY</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  For over 15 years, Siri Lions RFC has been the heartbeat of Sri Lankan rugby.
                  From the beaches of Negombo to international tournaments, our legacy is built
                  on passion, determination, and an unbreakable brotherhood.
                </p>
              </div>

              {/* STATS */}
              <div className="flex gap-6 items-start">
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white">15+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Years</div>
                </div>

                <div className="text-center">
                  <Users className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white">500+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Members</div>
                </div>

                <div className="text-center">
                  <Trophy className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white">28</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Titles</div>
                </div>
              </div>
            </div>

            {/* CONTENT SECTIONS */}
            <div className="mt-10 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">

              <h2 className="text-2xl font-bold mb-3">Introduction</h2>
              <p>
                Sri Lions Rugby is more than a club — it is a movement that inspires, unites, and uplifts.
                Built by Sri Lankan talent and strengthened by global experience, the team has grown into
                a respected force both locally and internationally.
              </p>

              <h3 className="mt-8 text-xl font-semibold">History & Breakthrough</h3>
              <p>
                What started as a small group of passionate players has evolved into a structured,
                disciplined rugby organisation with international recognition. The breakthrough moment
                came at the Dubai 7s, where Sri Lions competed in the Open Men's International Category —
                a historic achievement for a Sri Lankan club.
              </p>

              <h3 className="mt-8 text-xl font-semibold">Milestones (2019–2024)</h3>

              {/* MILESTONE TABLE */}
              <div className="overflow-x-auto bg-gray-900/70 rounded-md p-4">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-sm text-gray-300">
                      <th className="border-b border-gray-800 pb-2">Year</th>
                      <th className="border-b border-gray-800 pb-2">Achievement</th>
                      <th className="border-b border-gray-800 pb-2">Significance</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-200">
                    <tr>
                      <td className="py-3">2019</td>
                      <td className="py-3">Won the Gulf Men’s Championship</td>
                      <td className="py-3">Established dominance regionally</td>
                    </tr>
                    <tr>
                      <td className="py-3">2020</td>
                      <td className="py-3">Championship repeat</td>
                      <td className="py-3">Marked consistent high performance</td>
                    </tr>
                    <tr>
                      <td className="py-3">2021–2022</td>
                      <td className="py-3">International Open Men’s Semi-Finals</td>
                      <td className="py-3">Proved global competitiveness</td>
                    </tr>
                    <tr>
                      <td className="py-3">2023</td>
                      <td className="py-3">International Plate Champions</td>
                      <td className="py-3">Promoted to SLRFU A-Division</td>
                    </tr>
                    <tr>
                      <td className="py-3">2024</td>
                      <td className="py-3 font-semibold">Open Men’s International Champions</td>
                      <td className="py-3">One of the greatest achievements in club history</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8 text-xl font-semibold">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509611881826-d2ee27079fac?w=1200&h=800&fit=crop"
                    alt="Siri Lions match"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&h=800&fit=crop"
                    alt="Victory celebration"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&h=800&fit=crop"
                    alt="Team photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sri Lions Club • {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </article>

        {/* BACK CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
