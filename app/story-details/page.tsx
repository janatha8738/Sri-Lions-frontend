// app/story-details/page.tsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function StoryDetailsPage() {
  useEffect(() => {
    // Hide header "Login" button (best-effort: finds nodes containing "Login")
    const hideByText = (texts: string[]) => {
      const all = Array.from(document.querySelectorAll<HTMLElement>("a, button, div, span"));
      all.forEach((el) => {
        const txt = (el.textContent || "").trim();
        if (!txt) return;
        for (const t of texts) {
          if (txt === t || txt.includes(t)) {
            el.style.display = "none";
            const parent = el.closest("a, button, div");
            if (parent && parent !== el) parent.style.display = "none";
          }
        }
      });
    };

    hideByText(["Login", "Join the Pride", "Contact Us", "Join Now"]);

    const classSelectors = [".login-btn", ".nav-login", ".join-btn", ".contact-btn"];
    classSelectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => (el.style.display = "none"));
    });

    return () => {
      const all = Array.from(document.querySelectorAll<HTMLElement>("a, button, div, span"));
      all.forEach((el) => {
        const txt = (el.textContent || "").trim();
        if (!txt) return;
        if (["Login", "Join the Pride", "Contact Us", "Join Now"].some((t) => txt === t || txt.includes(t))) {
          el.style.display = "";
        }
      });
      classSelectors.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => (el.style.display = ""));
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 px-6 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-transparent to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-6">
            <span className="block text-white">OUR</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text">
              STORY
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sri Lions is a vibrant and growing sports and community movement built on the
            spirit of <span className="text-yellow-400 font-semibold">unity</span>, <span className="text-yellow-400 font-semibold">pride</span>, and <span className="text-yellow-400 font-semibold">service</span> — uniting Sri Lankans across the world.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 py-12 space-y-16">
        
        {/* INTRODUCTION */}
        <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-red-600 rounded-full"></div>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-yellow-900/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-yellow-900/20 transition-all duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">Introduction</h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Sri Lions is a vibrant and growing sports and community movement built on the
                spirit of unity, pride, and service. What began as a small initiative has now
                evolved into a recognized organization across multiple countries, including the
                <span className="text-white font-semibold"> UAE, Sri Lanka, and Canada</span>—supported
                by the Consulate General in Dubai and acknowledged by the Sri Lankan Sports Ministry.
              </p>

              <p>
                At the heart of Sri Lions is a commitment to uplift the Sri Lankan
                community through sports, cultural engagement, and meaningful social
                activities. Over the years, the organization has built a strong presence
                across the seven Emirates in the UAE, now representing more than <span className="text-yellow-400 font-bold">2,500
                registered members</span> and impacting nearly <span className="text-yellow-400 font-bold">10,000 people</span> who participate in
                various events annually.
              </p>

              <p>
                Our community gathers around major sporting events such as the <span className="text-yellow-400 font-semibold">Dubai
                7's</span>, <span className="text-yellow-400 font-semibold">Bukhatir Cricket League</span>, and the <span className="text-yellow-400 font-semibold">Dubai Netball League</span>, where Sri
                Lions proudly brings together athletes, families, and supporters. These
                events not only strengthen bonds but also showcase the passion and
                talent of Sri Lankans living abroad.
              </p>

              <p>
                Looking ahead, Sri Lions is expanding its footprint globally. With
                growth already established in Canada, our upcoming destinations include
                the <span className="text-white font-semibold">United Kingdom, Australia, France, Japan, Bahrain, and Oman</span>. Each
                new chapter brings us closer to our vision of uniting, inspiring, and
                empowering Sri Lankans around the world.
              </p>

              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-lg mt-8">
                <p className="text-yellow-100 font-medium italic text-xl">
                  Sri Lions is more than an organization—it is a movement of belonging,
                  pride, and togetherness. A place where Sri Lankans across the world
                  connect, compete, celebrate, and grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-orange-500 rounded-full"></div>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-red-900/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-red-900/20 transition-all duration-300">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-red-500">The History of Sri Lions</h2>

            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-yellow-600/40">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-slate-900"></div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">The Beginning</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The story of the Sri Lions began not with the thunder of a stadium,
                  but with the quiet yearning of a community far from home. In the
                  bustling heart of the United Arab Emirates, a group of Sri Lankan
                  expatriates recognized a deep need: <span className="text-white font-semibold">a place to belong, a flag to rally
                  under, and a way to connect</span> through the universal language of sport.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-yellow-600/40">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-slate-900"></div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">Foundation in the Desert</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Originally conceived as a simple community-sports organization, Sri
                  Lions quickly took root. Its early goal was pure and essential: to be a
                  pillar of support for Sri Lankans across the Emirates. They began
                  organizing spirited sports and cultural events, creating vibrant
                  pockets of home that offered companionship and a much-needed sense of
                  identity. As word spread, the movement flourished, quickly establishing
                  a strong presence across all seven Emirates.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-yellow-600/40">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-slate-900"></div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">Rise to the International Stage</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As the years passed, the membership base swelled, and with it, the
                  ambitions of the group. The Sri Lions weren't content just to play;
                  they wanted to <span className="text-red-400 font-bold">compete</span>. They started fielding competitive teams,
                  making their mark in regional tournaments. One achievement stood
                  out: becoming the <span className="text-yellow-400 font-bold">first—and for a time, the only—Sri Lankan team</span>
                  to compete in the Open Men's International Category at the prestigious
                  Dubai 7s tournament. This was more than a sporting achievement; it
                  was a powerful statement that Sri Lankans, united under the Lion
                  banner, belonged on the world stage.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-yellow-600/40">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-slate-900"></div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">Charting the Global Roar</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The success in the UAE and the glory of the Dubai 7s inspired a far
                  grander vision. The leaders of Sri Lions realized their mission wasn't
                  just about supporting the community in the Middle East—it was about
                  uniting the <span className="text-yellow-400 font-bold">Global Sri Lankan Sporting Identity</span>. Plans were drawn up to establish new
                  chapters in <span className="text-white font-semibold">Canada, the United Kingdom, Australia, France, Japan, Bahrain, and Oman</span>.
                  The goal: to nurture talent, strengthen bonds, and ensure that the powerful
                  Roar of the Sri Lions is heard in every corner of the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full"></div>
          <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900/80 border border-yellow-800/40 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-yellow-900/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">Achievements</h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Sri Lions' journey is marked by a series of remarkable triumphs and
                milestones, especially in rugby. In <span className="text-yellow-400 font-bold">2025</span>, the club delivered a flawless
                performance at the <span className="text-white font-semibold">Dubai 7s International Men's Open Championship</span>—
                winning the Cup title for the <span className="text-yellow-400 font-bold">second consecutive year</span>, and becoming
                the <span className="text-red-400 font-bold">first-ever Asian team</span> to clinch this championship twice in its
                history.
              </p>

              <div className="bg-slate-800/60 rounded-xl p-6 border border-yellow-600/30">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Tournament Performance</h4>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-yellow-400">Pool Stage:</span></p>
                  <ul className="list-none space-y-1 ml-4">
                    <li>• 31-0 vs SAS Rugby</li>
                    <li>• 33-0 vs Malta 7s</li>
                    <li>• 29-0 vs Godfather's Rugby</li>
                    <li>• 29-7 vs OG 7s</li>
                  </ul>
                  <p className="mt-3"><span className="text-yellow-400">Semifinals:</span> 26-19 vs OG 7s</p>
                  <p><span className="text-yellow-400">Final:</span> <span className="text-red-400 font-bold">45-7 vs Wyvern Harlequins</span></p>
                </div>
              </div>

              <p>
                As a result, Sri Lions not only proved their prowess on the field but
                also <span className="text-yellow-400 font-semibold">raised the profile of Sri Lankan club rugby internationally</span>—
                showing that with discipline, teamwork, and ambition, Sri Lankan clubs
                can compete with the best in the world.
              </p>

              <p>
                Beyond men's rugby, Sri Lions also expanded into other sports. They
                introduced a <span className="text-white font-semibold">Netball team into international category competitions</span>,
                fielding a squad with current and former national-level Sri Lankan
                players at Dubai 7s events.
              </p>

              <div className="bg-gradient-to-r from-yellow-900/30 to-red-900/30 border-l-4 border-yellow-500 p-6 rounded-lg mt-6">
                <p className="text-yellow-100 font-medium text-lg">
                  On the community side, Sri Lions continues to foster a spirit of unity
                  and cultural pride among Sri Lankan expatriates—offering not only
                  sports opportunities but social connection, cultural events, and a
                  network for Sri Lankans living far from home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLAYERS & KEY FIGURES */}
        <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-orange-900/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-orange-900/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400">Players & Key Figures</h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Sri Lions' success is rooted not only in ambition but also in the
              talent, leadership, and diversity of its squad—blending Sri Lankan
              players with experienced internationals to raise competitive standards.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-yellow-600/20 hover:border-yellow-600/50 transition-all">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Suliano Volivoli</h3>
                <p className="text-gray-300">A Fiji national-level player, he led the 2025 Sri Lions squad as captain during their championship run at Dubai 7s.</p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-yellow-600/20 hover:border-yellow-600/50 transition-all">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Corne Boland</h3>
                <p className="text-gray-300">Vice-captain of the 2025 side, from South Africa; a key leadership presence in the locker room and on-field.</p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-yellow-600/20 hover:border-yellow-600/50 transition-all">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Mohamed Nizran</h3>
                <p className="text-gray-300">Sri Lankan national flanker/prop, also vice-captain, representing the home-grown talent in the squad.</p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-yellow-600/20 hover:border-yellow-600/50 transition-all">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Simi Moala</h3>
                <p className="text-gray-300">A dual-nationality player (Tonga & USA), providing international experience and depth; also contributes as a coach within the club structure.</p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-yellow-600/20 hover:border-yellow-600/50 transition-all md:col-span-2">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Dileepa Peiris</h3>
                <p className="text-gray-300">Team coach in 2025, guiding the side tactically under direction from the club's executive leadership.</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-600/30 rounded-xl p-6">
              <p className="text-gray-300 text-lg italic">
                Under strategic guidance from the club's international executive
                committee, the team blends global expertise with Sri Lankan grit,
                forging a unique identity—<span className="text-yellow-400 font-semibold">a melting pot of talent that transcends borders</span>.
              </p>
            </div>
          </div>
        </section>

        {/* BACK BUTTON */}
        <div className="flex justify-center pt-8 pb-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-600/50"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}