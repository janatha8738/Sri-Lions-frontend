function HeroBanner() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <img
          src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sports action"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Our Sports Divisions
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl leading-relaxed">
          Excellence in every game. Join our thriving multi-sport community and be part of something extraordinary.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
            Explore Sports
          </button>
          <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105">
            Join Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export default HeroBanner;
