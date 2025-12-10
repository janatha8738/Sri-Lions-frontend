import { Trophy, TrendingUp, TrendingDown } from 'lucide-react';

const results = [
  {
    id: 1,
    sport: 'Cricket',
    homeTeam: 'Our Club',
    homeScore: '285/7',
    awayTeam: 'Strikers United',
    awayScore: '247/10',
    result: 'won',
    date: '8 Dec 2025',
    color: 'emerald'
  },
  {
    id: 2,
    sport: 'Rugby',
    homeTeam: 'Warriors FC',
    homeScore: '42',
    awayTeam: 'Our Club',
    awayScore: '38',
    result: 'lost',
    date: '7 Dec 2025',
    color: 'red'
  },
  {
    id: 3,
    sport: 'Football',
    homeTeam: 'Our Club',
    homeScore: '3',
    awayTeam: 'City Rangers',
    awayScore: '1',
    result: 'won',
    date: '5 Dec 2025',
    color: 'blue'
  },
  {
    id: 4,
    sport: 'Volleyball',
    homeTeam: 'Thunder Squad',
    homeScore: '2',
    awayTeam: 'Our Club',
    awayScore: '3',
    result: 'won',
    date: '3 Dec 2025',
    color: 'orange'
  }
];

function ResultsSection() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Recent Results</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Latest match outcomes from all our teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <span className={`px-4 py-2 bg-${result.color}-50 text-${result.color}-700 rounded-xl font-semibold text-sm`}>
                  {result.sport}
                </span>
                <span className="text-slate-500 text-sm font-medium">{result.date}</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className={`text-xl font-bold ${result.homeTeam === 'Our Club' ? 'text-slate-900' : 'text-slate-600'}`}>
                      {result.homeTeam}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mx-6">{result.homeScore}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className={`text-xl font-bold ${result.awayTeam === 'Our Club' ? 'text-slate-900' : 'text-slate-600'}`}>
                      {result.awayTeam}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mx-6">{result.awayScore}</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                {result.result === 'won' ? (
                  <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold">
                    <TrendingUp className="w-5 h-5" />
                    <span>Victory</span>
                    <Trophy className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                    <TrendingDown className="w-5 h-5" />
                    <span>Defeat</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            View All Results
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
