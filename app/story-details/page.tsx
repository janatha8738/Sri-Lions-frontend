"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function StoryDetailsPage() {
  useEffect(() => {
    const HIDE_TEXTS = ["Login", "Join the Pride", "Contact Us", "Join Now"];

    const hideByText = (texts: string[]) => {
      const all = Array.from(
        document.querySelectorAll<HTMLElement>("a, button, div, span")
      );

      all.forEach((el) => {
        const txt = (el.textContent || "").trim();
        if (!txt) return;

        texts.forEach((t) => {
          if (txt === t || txt.includes(t)) {
            el.style.display = "none";

            const parent = el.closest<HTMLElement>("a, button, div");
            if (parent && parent !== el) {
              parent.style.display = "none";
            }
          }
        });
      });
    };

    hideByText(HIDE_TEXTS);

    const classSelectors = [
      ".login-btn",
      ".nav-login",
      ".join-btn",
      ".contact-btn",
    ];

    classSelectors.forEach((sel) => {
      document
        .querySelectorAll<HTMLElement>(sel)
        .forEach((el) => (el.style.display = "none"));
    });

    return () => {
      const all = Array.from(
        document.querySelectorAll<HTMLElement>("a, button, div, span")
      );

      all.forEach((el) => {
        const txt = (el.textContent || "").trim();
        if (!txt) return;

        if (HIDE_TEXTS.some((t) => txt === t || txt.includes(t))) {
          el.style.display = "";
        }
      });

      classSelectors.forEach((sel) => {
        document
          .querySelectorAll<HTMLElement>(sel)
          .forEach((el) => (el.style.display = ""));
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* HERO */}
      <section className="relative w-full pt-32 pb-20 px-6 sm:px-12 lg:px-24 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold">
          <span className="block">OUR</span>
          <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text">
            STORY
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto my-8" />
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          Sri Lions is a global sports and community movement built on unity,
          pride, and service—connecting Sri Lankans around the world.
        </p>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 py-12 space-y-16">
        <section className="bg-slate-900/60 border border-yellow-900/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
            Introduction
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            What started as a small initiative in the UAE has grown into a
            multi-country movement supported by thousands of members across Sri
            Lanka, UAE, and Canada—with global expansion underway.
          </p>
        </section>

        <section className="bg-slate-900/60 border border-red-900/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-red-400 mb-6">
            Our Journey
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Sri Lions emerged from a simple need—belonging. Through sport, the
            organization unified Sri Lankans abroad and rose to international
            prominence, including historic achievements at Dubai 7s.
          </p>
        </section>

        <section className="bg-slate-900/60 border border-yellow-900/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
            Achievements
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Two-time Dubai 7s champions, first Asian team to win the title twice,
            and a growing presence in netball, cricket, and community sports.
          </p>
        </section>

        {/* BACK */}
        <div className="flex justify-center pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
