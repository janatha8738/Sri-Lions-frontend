"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";

// -------------------------
// Dummy Data
// -------------------------
type NewsItem = {
  id: string;
  title: string;
  description: string;
  image?: string; // Will store Base64 string
};

type EventItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
};

export default function AdminDashboard() {
  const [news, setNews] = useState<NewsItem[]>([
    { id: "1", title: "Tech Innovations Shaping 2025", description: "AI & Web3 are transforming industries.", image: "" },
  ]);

  const [events, setEvents] = useState<EventItem[]>([
    { id: "1", title: "SLIIT IT Launch", description: "New IT program launch.", date: "2025-12-01", image: "" },
  ]);

  const [newsForm, setNewsForm] = useState<NewsItem>({ id: "", title: "", description: "", image: "" });
  const [eventForm, setEventForm] = useState<EventItem>({ id: "", title: "", description: "", date: "", image: "" });

  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  const [activeSection, setActiveSection] = useState<"news" | "events" | null>(null);

  // ------------------------- Helpers -------------------------
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

  // ------------------------- News Handlers -------------------------
  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNewsId) {
      setNews(news.map(n => n.id === editingNewsId ? { ...newsForm, id: editingNewsId } : n));
      setEditingNewsId(null);
    } else {
      setNews([{ ...newsForm, id: Date.now().toString() }, ...news]); // newest first
    }
    setNewsForm({ id: "", title: "", description: "", image: "" });
  };

  const handleNewsEdit = (item: NewsItem) => {
    setEditingNewsId(item.id);
    setNewsForm(item);
  };

  const handleNewsDelete = (id: string) => {
    setNews(news.filter(n => n.id !== id));
  };

  // ------------------------- Event Handlers -------------------------
  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEventId) {
      setEvents(events.map(ev => ev.id === editingEventId ? { ...eventForm, id: editingEventId } : ev));
      setEditingEventId(null);
    } else {
      setEvents([{ ...eventForm, id: Date.now().toString() }, ...events]); // newest first
    }
    setEventForm({ id: "", title: "", description: "", date: "", image: "" });
  };

  const handleEventEdit = (item: EventItem) => {
    setEditingEventId(item.id);
    setEventForm(item);
  };

  const handleEventDelete = (id: string) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Section Selector */}
      <div className="mb-8 flex gap-4">
        <button
          className={`px-6 py-2 rounded ${activeSection === "news" ? "bg-orange-500 text-white" : "bg-white dark:bg-gray-800"}`}
          onClick={() => setActiveSection("news")}
        >
          Manage News
        </button>
        <button
          className={`px-6 py-2 rounded ${activeSection === "events" ? "bg-orange-500 text-white" : "bg-white dark:bg-gray-800"}`}
          onClick={() => setActiveSection("events")}
        >
          Manage Events
        </button>
      </div>

      {/* ---------------- News Section ---------------- */}
      {activeSection === "news" && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">News Management</h2>

          {/* News Form */}
          <form onSubmit={handleNewsSubmit} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow-md space-y-3">
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded dark:bg-gray-700"
              value={newsForm.title}
              onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded dark:bg-gray-700"
              value={newsForm.description}
              onChange={(e) => setNewsForm({ ...newsForm, description: e.target.value })}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, true)}
              className="w-full p-2 border rounded dark:bg-gray-700"
            />
            {newsForm.image && <Image src={newsForm.image} alt="Preview" width={300} height={150} className="rounded mb-2" />}
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              {editingNewsId ? "Update News" : "Add News"}
            </button>
          </form>

          {/* News List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow relative">
                {item.image && <Image src={item.image} alt={item.title} width={300} height={150} className="rounded mb-2" />}
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleNewsEdit(item)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button onClick={() => handleNewsDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- Events Section ---------------- */}
      {activeSection === "events" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Events Management</h2>

          {/* Event Form */}
          <form onSubmit={handleEventSubmit} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow-md space-y-3">
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded dark:bg-gray-700"
              value={eventForm.title}
              onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded dark:bg-gray-700"
              value={eventForm.description}
              onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
              required
            />
            <input
              type="date"
              className="w-full p-2 border rounded dark:bg-gray-700"
              value={eventForm.date}
              onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, false)}
              className="w-full p-2 border rounded dark:bg-gray-700"
            />
            {eventForm.image && <Image src={eventForm.image} alt="Preview" width={300} height={150} className="rounded mb-2" />}
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              {editingEventId ? "Update Event" : "Add Event"}
            </button>
          </form>

          {/* Event List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow relative">
                {item.image && <Image src={item.image} alt={item.title} width={300} height={150} className="rounded mb-2" />}
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Date: {item.date}</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleEventEdit(item)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button onClick={() => handleEventDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
