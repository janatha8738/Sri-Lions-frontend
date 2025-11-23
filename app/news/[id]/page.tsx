import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";

const API_URL = "http://localhost:4000/api/content";

export default async function NewsDetail(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;

  if (!id || id === "undefined") notFound();

  try {
    const res = await fetch(`${API_URL}/news/${id}`, { cache: "no-store" });

    if (!res.ok) {
      console.log("Backend error:", res.status);
      notFound();
    }

    const data = await res.json();

    console.log("News Detail API Response:", data);

    if (!data.success || !data.data) {
      notFound();
    }

    const news = data.data;

    // Handle both _id and id fields
    if (!news.id && news._id) {
      news.id = news._id;
    }

    return (
      <main className="pt-32 pb-20 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold mb-8 transition"
          >
            <ArrowLeft size={20} /> Back to All News
          </Link>

          <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            {news.image ? (
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
            ) : (
              <div className="h-96 md:h-[500px] bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center">
                <h1 className="text-white text-6xl font-bold opacity-20">NEWS</h1>
              </div>
            )}

            <div className="relative -mt-32 md:-mt-40 mx-6 md:mx-12 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
              {news.createdAt && (
                <div className="flex items-center gap-2 text-orange-500 font-semibold mb-6">
                  <Calendar size={20} />
                  <span>
                    {new Date(news.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}

              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                {news.title}
              </h1>

              {news.heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">
                  {news.heading}
                </h2>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {news.description || news.heading}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sri Lions Club • {new Date(news.createdAt || Date.now()).getFullYear()}
                </p>
              </div>
            </div>
          </article>

          <div className="mt-16 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105"
            >
              <ArrowLeft size={22} /> View All News
            </Link>
          </div>
        </div>
      </main>
    );
  } catch (err) {
    console.error("Fetch failed:", err);
    notFound();
  }
}