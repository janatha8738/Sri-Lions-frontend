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
            // hide the nearest clickable parent if needed
            el.style.display = "none";
            const parent = el.closest("a, button, div");
            if (parent && parent !== el) parent.style.display = "none";
          }
        }
      });
    };

    // texts to remove on this page
    hideByText(["Login", "Join the Pride", "Contact Us", "Join Now"]);

    // Also hide elements that commonly use these classnames (if present)
    const classSelectors = [".login-btn", ".nav-login", ".join-btn", ".contact-btn"];
    classSelectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => (el.style.display = "none"));
    });

    // Cleanup: not strictly necessary (we want them hidden while on this page),
    // but if user navigates away the app will re-render other pages and header will reappear.
    return () => {
      // Try to restore (best-effort) by removing inline display:none on matching nodes
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
    <main className="min-h-screen bg-[#0a0a0a] text-white mt-48">
      {/* PAGE HEADER - centered and pulled down so it's visible below the site header */}
      <section className="w-full pt-6 pb-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-black to-transparent text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          <span className="block">OUR</span>
          <span className="block text-red-600">STORY</span>
        </h1>

        {/* hero paragraph: same size/color styling as 'Introduction' paragraphs */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Sri Lions is a vibrant and growing sports and community movement built on the
          spirit of unity, pride, and service — uniting Sri Lankans across the world.
        </p>
      </section>

      {/* MAIN BODY */}
      <div className="px-6 sm:px-12 lg:px-24 py-8 space-y-14">
        {/* INTRODUCTION */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Introduction</h2>

          <p className="text-gray-300 leading-relaxed">
            Sri Lions is a vibrant and growing sports and community movement built on the
            spirit of unity, pride, and service. What began as a small initiative has now
            evolved into a recognized organization across multiple countries—including the
            UAE, Sri Lanka, and Canada—supported by the Consulate General in Dubai and
            acknowledged by the Sri Lankan Sports Ministry.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4">
            With over 2,500 registered members and nearly 10,000 annual participants, Sri
            Lions has become a global symbol of togetherness and community empowerment.
            The organization gathers around major sporting events such as the Dubai 7’s,
            Bukhatir Cricket League, and the Dubai Netball League, keeping cultural bonds
            alive among Sri Lankan expatriates.
          </p>
        </section>

        {/* HISTORY */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">The History of Sri Lions</h2>

          <div>
            <h3 className="text-xl font-bold text-red-600 mb-2">The Beginning</h3>
            <p className="text-gray-300 leading-relaxed">
              The Sri Lions story began not in a stadium, but in the hearts of Sri Lankan
              expatriates in the UAE who needed a place to belong. They envisioned a
              community-sports organization that would bring together Sri Lankans through
              events, culture, and the unifying love of sport.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-600 mb-2">Foundation in the Desert</h3>
            <p className="text-gray-300 leading-relaxed">
              With early cultural programs and sports tournaments, Sri Lions quickly became
              a pillar of unity for Sri Lankans across all seven Emirates. The rapid growth
              showed the need for a global identity and stronger sporting presence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-600 mb-2">Rise to the International Stage</h3>
            <p className="text-gray-300 leading-relaxed">
              Sri Lions defied expectations by competing in the Open Men’s International
              Category at the globally renowned Dubai 7s. They became the first Sri Lankan
              club to play at that level, proving that determination and unity could elevate
              them onto the world stage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-600 mb-2">Charting the Global Roar</h3>
            <p className="text-gray-300 leading-relaxed">
              Inspired by success, Sri Lions expanded globally—establishing chapters in
              Canada, UK, Australia, France, Japan, Bahrain, and Oman. Their mission: unite
              Sri Lankans worldwide under one roaring identity.
            </p>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Achievements</h2>

          <p className="text-gray-300 leading-relaxed mb-3">
            Sri Lions reached a major milestone in 2025 when they won the Dubai 7s International
            Men’s Open Championship for the second consecutive year—becoming the first ever
            Asian team to win the title twice.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Their dominant run included pool-stage victories and a decisive final performance,
            and their success raised the profile of Sri Lankan club rugby internationally.
          </p>
        </section>

        {/* PLAYERS & KEY FIGURES */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Players & Key Figures</h2>

          <ul className="space-y-3 text-gray-300 text-base">
            <li>
              <strong>Suliano Volivoli</strong> — Fiji national-level player, 2025 captain.
            </li>
            <li>
              <strong>Corne Boland</strong> — Vice-captain, South Africa.
            </li>
            <li>
              <strong>Mohamed Nizran</strong> — Sri Lankan national flanker/prop.
            </li>
            <li>
              <strong>Simi Moala</strong> — Dual-national (Tonga/USA), senior player & coach.
            </li>
            <li>
              <strong>Dileepa Peiris</strong> — 2025 head coach.
            </li>
          </ul>
        </section>

        {/* CTA area - only Back to Home button included (Join & Contact removed as requested) */}
        <div className="flex flex-wrap items-center gap-4 pb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
