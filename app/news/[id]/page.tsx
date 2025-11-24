"use client";

import { useParams } from "next/navigation";

// This is temporary dummy data.
// Your real data will be loaded later.
const allNews = [
  {
    id: "1",
    title: "Tech Innovations Shaping 2025",
    content:
      "Full article for News 1. Replace with real content later.",
  },
  {
    id: "2",
    title: "SLIIT Launches New IT Program",
    content:
      "Full article for News 2. Replace with real content later.",
  },
];

export default function NewsDetails() {
  const { id } = useParams();

  const article = allNews.find((n) => n.id === id);

  if (!article) {
    return (
      <div className="p-20 text-center text-red-500 text-3xl">
        Article Not Found
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        {article.content}
      </p>
    </div>
  );
}
