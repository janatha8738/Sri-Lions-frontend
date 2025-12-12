// app/rugby/components/GallerySection.tsx
const gallery = [
  "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1627335983639-6e9e147b0a43?w=800&h=600&fit=crop",
];

export default function GallerySection() {
  return (
    <section id="gallery">
      <h2 className="text-6xl font-black text-amber-400 text-center mb-16">
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((src, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform transition-all duration-500 hover:shadow-amber-900/50"
          >
            <img
              src={src}
              alt={`Sri Lions Rugby Gallery ${i + 1}`}
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}