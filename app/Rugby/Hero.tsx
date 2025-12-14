// app/rugby/components/Hero.tsx
export default function Hero() {
  return (
    <div
      className="relative h-96 md:h-[80vh] lg:h-[85vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/rugby.jpg')",
        backgroundColor: '#000', // fallback
      }}
    >
      {/* Subtle dark overlay — only this makes text readable without changing your font */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        {/* Your original amber text — completely unchanged */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-amber-400 tracking-widest mb-4">
          SRI LIONS RUGBY
        </h1>

        <p className="text-xl md:text-3xl lg:text-4xl font-light text-amber-100 max-w-4xl">
          Dubai 7s International Open Men’s Champions 2024
        </p>
      </div>
    </div>
  );
}