// app/rugby/components/StickyNav.tsx
"use client";

import { useState, useEffect, useRef } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "players", label: "Squad" },
  { id: "legacy", label: "Legacy" },
  { id: "ladies", label: "Women's Academy" },
  { id: "gallery", label: "Gallery" },
  { id: "fixtures", label: "Fixtures" },
];

export default function StickyNav() {
  const [activeTab, setActiveTab] = useState("overview");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      sectionRefs.current[section.id] = section;
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-amber-900">
      <div className="container mx-auto px-6">
        <div className="flex space-x-10 overflow-x-auto py-5 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-2 py-3 border-b-4 font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-amber-400 text-amber-400"
                  : "border-transparent text-gray-500 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}