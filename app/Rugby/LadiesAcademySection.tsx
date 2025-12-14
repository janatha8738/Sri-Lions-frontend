// app/rugby/components/LadiesAcademySection.tsx

export default function LadiesAcademySection() {
  return (
    <section id="ladies">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black text-purple-400 mb-6">
          Sri Lions Ladies Rugby Academy
        </h2>
        <p className="text-3xl text-gray-300">
          First Ever Women's Rugby Academy in Sri Lanka
        </p>
        <p className="text-xl text-gray-500 mt-4">Launched 20 January 2024</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            After 145 years of rugby in Sri Lanka, <strong>Sri Lions made history</strong> by launching the country's first dedicated Ladies Rugby Academy.
          </p>
          <p>
            Guided by former national captain <strong>Srinath Sooriyabandara</strong> and head coach <strong>Mrs. Sujani Ratnayake</strong>, we are building the future of Sri Lankan women's rugby.
          </p>
          <p className="text-purple-400 font-bold text-xl">
            Goal: Compete at Dubai 7s Women's International Open
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border-2 border-purple-800">
          <img 
            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop" 
            alt="Women's Rugby Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}