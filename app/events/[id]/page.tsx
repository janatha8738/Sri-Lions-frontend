import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";

const API_URL = "http://localhost:4000/api/content";

export default async function EventDetail(
  props: { params: Promise<{ id: string }> } // params as a Promise
) {
  // ✅ Await the params
  const { id } = await props.params;

  if (!id || id === "undefined") notFound();

  try {
    const res = await fetch(`${API_URL}/events/${id}`, { cache: "no-store" });

    if (!res.ok) {
      console.log("Backend error:", res.status);
      notFound(); // 404 page
    }

    const data = await res.json();

    if (!data.success || !data.data) {
      notFound();
    }

    const event = data.data;

    return (
      <main className="pt-32 pb-20 px-4 sm:px-16 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold mb-8 transition"
          >
            <ArrowLeft size={20} /> Back to All Events
          </Link>

          <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            {event.image ? (
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
            ) : (
              <div className="h-96 md:h-[500px] bg-gradient-to-br from-orange-500 to-pink-700 flex items-center justify-center">
                <h1 className="text-white text-6xl font-bold opacity-20">EVENT</h1>
              </div>
            )}

            <div className="relative -mt-32 md:-mt-40 mx-6 md:mx-12 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
              {event.date && (
                <div className="flex items-center gap-2 text-orange-500 font-semibold mb-6">
                  <Calendar size={20} />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}

              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                {event.title}
              </h1>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {event.description}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sri Lions Club • {new Date(event.createdAt || Date.now()).getFullYear()}
                </p>
              </div>
            </div>
          </article>

          <div className="mt-16 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105"
            >
              <ArrowLeft size={22} /> View All Events
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
