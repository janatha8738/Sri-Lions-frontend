"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X, 
  Newspaper, 
  Calendar,
  Upload,
  CheckCircle,
  AlertCircle
} from "lucide-react";

// Types
type NewsItem = { _id?: string; title: string; description: string; image?: string };
type EventItem = { _id?: string; title: string; description: string; date: string; image?: string };

export default function AdminDashboard() {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  const [newsForm, setNewsForm] = useState<NewsItem>({ title: "", description: "", image: "" });
  const [eventForm, setEventForm] = useState<EventItem>({ title: "", description: "", date: "", image: "" });

  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<"news" | "events">("news");

  const API_URL = "http://localhost:4000/api/content";

  // Get token from localStorage
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Show message helper
  const showMessage = (msg: string, type: "success" | "error" = "success") => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(""), 3000);
  };

  // Redirect if not authenticated
  useEffect(() => {
    if (!token) {
      showMessage("Please login first", "error");
      router.push("/login");
    } else {
      fetchNews();
      fetchEvents();
    }
  }, [token, router]);

  // Fetch functions
  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_URL}/news`);
      const data = await res.json();
      setNews(data.data || []);
    } catch (error) {
      showMessage("Failed to fetch news", "error");
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_URL}/events`);
      const data = await res.json();
      setEvents(data.data || []);
    } catch (error) {
      showMessage("Failed to fetch events", "error");
    }
  };

  // Logout handler
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    showMessage("Logged out successfully");
    router.push("/login");
  };

  // Image upload handler
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

  // News CRUD handlers
  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
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
      showMessage(editingNewsId ? "News updated successfully!" : "News added successfully!");
    } catch (error) {
      showMessage("Failed to save news", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleNewsEdit = (item: NewsItem) => {
    setEditingNewsId(item._id!);
    setNewsForm({ title: item.title, description: item.description, image: item.image || "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this news?")) {
      try {
        await fetch(`${API_URL}/news/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchNews();
        showMessage("News deleted successfully!");
      } catch (error) {
        showMessage("Failed to delete news", "error");
      }
    }
  };

  const cancelNewsEdit = () => {
    setEditingNewsId(null);
    setNewsForm({ title: "", description: "", image: "" });
  };

  // Event CRUD handlers
  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
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
      showMessage(editingEventId ? "Event updated successfully!" : "Event added successfully!");
    } catch (error) {
      showMessage("Failed to save event", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEventEdit = (item: EventItem) => {
    setEditingEventId(item._id!);
    setEventForm({ title: item.title, description: item.description, date: item.date, image: item.image || "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEventDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      try {
        await fetch(`${API_URL}/events/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchEvents();
        showMessage("Event deleted successfully!");
      } catch (error) {
        showMessage("Failed to delete event", "error");
      }
    }
  };

  const cancelEventEdit = () => {
    setEditingEventId(null);
    setEventForm({ title: "", description: "", date: "", image: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Manage your content</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors shadow-md"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Message */}
      {message && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl ${
            messageType === "success" 
              ? "bg-green-600 text-white" 
              : "bg-red-600 text-white"
          }`}>
            {messageType === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="font-medium">{message}</span>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex gap-3 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md">
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === "news"
                ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("news")}
          >
            <Newspaper className="w-5 h-5" />
            News Management
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === "events"
                ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("events")}
          >
            <Calendar className="w-5 h-5" />
            Events Management
          </button>
        </div>

        {/* News Section */}
        {activeSection === "news" && (
          <section>
            {/* News Form */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Plus className="w-6 h-6 text-orange-600" />
                  {editingNewsId ? "Edit News" : "Add New News"}
                </h2>
                {editingNewsId && (
                  <button
                    onClick={cancelNewsEdit}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                    Cancel
                  </button>
                )}
              </div>
              
              <form onSubmit={handleNewsSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter news title"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    value={newsForm.title}
                    onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter news description"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    value={newsForm.description}
                    onChange={(e) => setNewsForm({ ...newsForm, description: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Image
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Upload className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Choose Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, true)}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {newsForm.image && (
                    <div className="mt-4 relative inline-block">
                      <Image
                        src={newsForm.image}
                        alt="Preview"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover border-2 border-gray-200 dark:border-gray-600"
                      />
                      <button
                        type="button"
                        onClick={() => setNewsForm({ ...newsForm, image: "" })}
                        className="absolute -top-2 -right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      {editingNewsId ? "Update News" : "Add News"}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* News List */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                All News ({news.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                  >
                    {item.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleNewsEdit(item)}
                          className="flex items-center gap-2 flex-1 justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleNewsDelete(item._id!)}
                          className="flex items-center gap-2 flex-1 justify-center bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {news.length === 0 && (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
                  <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">No news items yet. Add your first news!</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Events Section */}
        {activeSection === "events" && (
          <section>
            {/* Event Form */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Plus className="w-6 h-6 text-orange-600" />
                  {editingEventId ? "Edit Event" : "Add New Event"}
                </h2>
                {editingEventId && (
                  <button
                    onClick={cancelEventEdit}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                    Cancel
                  </button>
                )}
              </div>
              
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter event title"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    value={eventForm.title}
                    onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter event description"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    value={eventForm.description}
                    onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Image
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Upload className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Choose Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, false)}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {eventForm.image && (
                    <div className="mt-4 relative inline-block">
                      <Image
                        src={eventForm.image}
                        alt="Preview"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover border-2 border-gray-200 dark:border-gray-600"
                      />
                      <button
                        type="button"
                        onClick={() => setEventForm({ ...eventForm, image: "" })}
                        className="absolute -top-2 -right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      {editingEventId ? "Update Event" : "Add Event"}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Events List */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                All Events ({events.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                  >
                    {item.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-orange-600 text-sm font-semibold mb-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEventEdit(item)}
                          className="flex items-center gap-2 flex-1 justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleEventDelete(item._id!)}
                          className="flex items-center gap-2 flex-1 justify-center bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {events.length === 0 && (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">No events yet. Add your first event!</p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}