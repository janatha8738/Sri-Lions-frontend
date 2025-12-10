import { Calendar, MapPin, Clock } from 'lucide-react';

const fixtures = [
  {
    id: 1,
    sport: 'Cricket',
    homeTeam: 'Our Club',
    awayTeam: 'City Challengers',
    date: '15 Dec 2025',
    time: '14:00',
    venue: 'Main Cricket Ground',
    competition: 'Premier League',
    color: 'emerald'
  },
  {
    id: 2,
    sport: 'Rugby',
    homeTeam: 'Our Club',
    awayTeam: 'United Warriors',
    date: '17 Dec 2025',
    time: '15:30',
    venue: 'Central Stadium',
    competition: 'Championship',
    color: 'red'
  },
  {
    id: 3,
    sport: 'Football',
    homeTeam: 'Athletic FC',
    awayTeam: 'Our Club',
    date: '20 Dec 2025',
    time: '19:00',
    venue: 'Riverside Arena',
    competition: 'Division 1',
    color: 'blue'
  },
  {
    id: 4,
    sport: 'Volleyball',
    homeTeam: 'Our Club',
    awayTeam: 'Spike Masters',
    date: '22 Dec 2025',
    time: '18:00',
    venue: 'Sports Complex',
    competition: 'National League',
    color: 'orange'
  }
];

function FixturesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Upcoming Fixtures</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't miss our upcoming matches across all divisions
          </p>
        </div>

        <div className="space-y-6">
          {fixtures.map((fixture) => (
            <div key={fixture.id} className="bg-white border-2 border-slate-100 rounded-2xl p-8 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className={`inline-block px-4 py-2 bg-${fixture.color}-50 text-${fixture.color}-700 rounded-xl font-semibold text-sm`}>
                    {fixture.sport}
                  </div>
                  <div className="mt-3 text-slate-500 text-sm font-medium">{fixture.competition}</div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-right md:text-right">
                    <div className="text-2xl font-bold text-slate-900">{fixture.homeTeam}</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-400">VS</div>
                  </div>

                  <div className="text-left md:text-left">
                    <div className="text-2xl font-bold text-slate-900">{fixture.awayTeam}</div>
                  </div>
                </div>

                <div className="flex-shrink-0 space-y-2 lg:text-right">
                  <div className="flex items-center gap-2 lg:justify-end text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{fixture.date}</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-end text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{fixture.time}</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-end text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{fixture.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            View Full Fixture List
          </button>
        </div>
      </div>
    </section>
  );
}

export default FixturesSection;
