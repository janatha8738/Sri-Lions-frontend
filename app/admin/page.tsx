"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Types (same as before)
type NewsItem = { _id?: string; title: string; description: string; image?: string };
type EventItem = { _id?: string; title: string; description: string; date: string; image?: string };

export default function AdminDashboard() {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [newsForm, setNewsForm] = useState<NewsItem>({ title: "", description: "", image: "" });
  const [eventForm, setEventForm] = useState<EventItem>({ title: "", description: "", date: "", image: "" });

  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<"news" | "events">("news");

  const API_URL = "http://localhost:4000/api/content";

  // Get token from localStorage (you already logged in via Swagger)
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // If no token, redirect to login (optional)
  useEffect(() => {
    if (!token) {
      setMessage("Please login first");
      // router.push("/login");  // uncomment if you have login page
    } else {
      fetchNews();
      fetchEvents();
    }
  }, [token]);

  // Fetch functions
  const fetchNews = async () => {
    const res = await fetch(`${API_URL}/news`);
    const data = await res.json();
    setNews(data.data || []);
  };

  const fetchEvents = async () => {
    const res = await fetch(`${API_URL}/events`);
    const data = await res.json();
    setEvents(data.data || []);
  };

  // Image upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>, isNews: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      if (isNews) setNewsForm({ ...newsForm, image: base64 });
      else setEventForm({ ...eventForm, image: base64 });
    };
    reader.readAsDataURL(file);
  };

  // News handlers
  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const method = editingNewsId ? "PUT" : "POST";
    const url = editingNewsId ? `${API_URL}/news/${editingNewsId}` : `${API_URL}/news`;

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newsForm),
    });

    setNewsForm({ title: "", description: "", image: "" });
    setEditingNewsId(null);
    fetchNews();
    setLoading(false);
    setMessage(editingNewsId ? "News updated!" : "News added!");
  };

  const handleNewsEdit = (item: NewsItem) => {
    setEditingNewsId(item._id!);
    setNewsForm({ title: item.title, description: item.description, image: item.image });
  };

  const handleNewsDelete = async (id: string) => {
    if (confirm("Delete this news?")) {
      await fetch(`${API_URL}/news/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNews();
    }
  };

  // Event handlers (same as news, copy-paste)
  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const method = editingEventId ? "PUT" : "POST";
    const url = editingEventId ? `${API_URL}/events/${editingEventId}` : `${API_URL}/events`;

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(eventForm),
    });

    setEventForm({ title: "", description: "", date: "", image: "" });
    setEditingEventId(null);
    fetchEvents();
    setLoading(false);
    setMessage(editingEventId ? "Event updated!" : "Event added!");
  };

  const handleEventEdit = (item: EventItem) => {
    setEditingEventId(item._id!);
    setEventForm({ title: item.title, description: item.description, date: item.date, image: item.image });
  };

  const handleEventDelete = async (id: string) => {
    if (confirm("Delete this event?")) {
      await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEvents();
    }
  };

  // UI (exactly same as yours, only added {loading && "Saving..."} and {message})
  return (
    <div className="min-h-screen pt-32 sm:pt-40 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {message && <p className="text-green-600 font-bold mb-4">{message}</p>}

      <div className="mb-8 flex gap-4">
        <button className={`px-6 py-2 rounded ${activeSection === "news" ? "bg-orange-500 text-white" : "bg-white dark:bg-gray-800"}`} onClick={() => setActiveSection("news")}>
          Manage News
        </button>
        <button className={`px-6 py-2 rounded ${activeSection === "events" ? "bg-orange-500 text-white" : "bg-white dark:bg-gray-800"}`} onClick={() => setActiveSection("events")}>
          Manage Events
        </button>
      </div>

      {/* News Section */}
      {activeSection === "news" && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">News Management</h2>
          <form onSubmit={handleNewsSubmit} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow-md space-y-3">
            <input type="text" placeholder="Title" className="w-full p-2 border rounded dark:bg-gray-700" value={newsForm.title} onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} required />
            <textarea placeholder="Description" className="w-full p-2 border rounded dark:bg-gray-700" value={newsForm.description} onChange={(e) => setNewsForm({ ...newsForm, description: e.target.value })} required />
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, true)} className="w-full p-2 border rounded dark:bg-gray-700" />
            {newsForm.image && <Image src={newsForm.image} alt="Preview" width={300} height={150} className="rounded mb-2" />}
            <button type="submit" disabled={loading} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              {loading ? "Saving..." : editingNewsId ? "Update News" : "Add News"}
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item) => (
              <div key={item._id} className="bg-white dark:bg-gray-800 p-4 rounded shadow relative">
                {item.image && <Image src={item.image} alt={item.title} width={300} height={150} className="rounded mb-2" />}
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleNewsEdit(item)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button onClick={() => handleNewsDelete(item._id!)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Events Section - exactly same as yours */}
      {activeSection === "events" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Events Management</h2>
          <form onSubmit={handleEventSubmit} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow-md space-y-3">
            <input type="text" placeholder="Title" className="w-full p-2 border rounded dark:bg-gray-700" value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} required />
            <textarea placeholder="Description" className="w-full p-2 border rounded dark:bg-gray-700" value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })} required />
            <input type="date" className="w-full p-2 border rounded dark:bg-gray-700" value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} required />
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, false)} className="w-full p-2 border rounded dark:bg-gray-700" />
            {eventForm.image && <Image src={eventForm.image} alt="Preview" width={300} height={150} className="rounded mb-2" />}
            <button type="submit" disabled={loading} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              {loading ? "Saving..." : editingEventId ? "Update Event" : "Add Event"}
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((item) => (
              <div key={item._id} className="bg-white dark:bg-gray-800 p-4 rounded shadow relative">
                {item.image && <Image src={item.image} alt={item.title} width={300} height={150} className="rounded mb-2" />}
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Date: {item.date}</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleEventEdit(item)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button onClick={() => handleEventDelete(item._id!)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}