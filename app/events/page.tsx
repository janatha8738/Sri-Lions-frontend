import Image from "next/image";
import Link from "next/link";

type EventItem = {
  _id: string;
  title: string;
  description: string;
  date?: string;
  image?: string;
};

const API_URL = "http://localhost:4000/api/content";

export default async function EventsPage() {
  let events: EventItem[] = [];

  try {
    const res = await fetch(`${API_URL}/events`, { cache: "no-store" });
    const data = await res.json();
    events = data?.data || [];
  } catch (err) {
    // swallow - will render helpful fallback below
    events = [];
  }

  return (
    <section className="py-16 px-4 sm:px-40 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Events</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Upcoming and past events — click any event to view details.</p>
        </div>

        {events.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-300">No events available at the moment.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((item) => (
              <Link key={item._id} href={`/events/${item._id}`} className="block">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition">
                  {item.image ? (
                    <div className="relative w-full h-48">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{item.title}</h3>
                    {item.date && <p className="text-sm text-gray-500 mb-2">Date: {item.date}</p>}
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
