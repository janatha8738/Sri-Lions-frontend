// app/rugby/components/FixturesSection.tsx
const upcomingMatches = [
  { date: "15 Dec 2025", opponent: "CR & FC", venue: "Racecourse Ground", time: "4:15 PM" },
  { date: "22 Dec 2025", opponent: "Kandy SC", venue: "Nitawela", time: "4:15 PM" },
  { date: "05 Jan 2026", opponent: "Police SC", venue: "Police Park", time: "4:15 PM" },
];

export default function FixturesSection() {
  return (
    <section id="fixtures">
      <h2 className="text-6xl font-black text-amber-400 text-center mb-16">
        Upcoming Matches
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {upcomingMatches.map((match, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-10 border border-amber-900"
            // Removed: hover:border-amber-500, transition-all, group
          >
            <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8 lg:gap-0">
              <div>
                <p className="text-amber-400 text-2xl font-bold">{match.date}</p>
                <p className="text-4xl font-black text-white mt-3">
                  Sri Lions vs {match.opponent}
                </p>
                <p className="text-gray-400 mt-2">{match.venue}</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-amber-400">{match.time}</p>
                <button className="mt-4 bg-amber-600 px-10 py-4 rounded-xl text-xl font-bold">
                  Get Tickets
                  {/* Removed: hover:bg-amber-500, transform, group-hover:scale-105 */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}