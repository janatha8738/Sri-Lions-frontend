import { Medal, TrendingUp } from 'lucide-react';

const standings = [
  { position: 1, team: 'Our Club', played: 18, won: 14, drawn: 2, lost: 2, points: 44, form: ['W', 'W', 'W', 'D', 'W'], highlight: true },
  { position: 2, team: 'City Champions', played: 18, won: 13, drawn: 3, lost: 2, points: 42, form: ['W', 'L', 'W', 'W', 'D'] },
  { position: 3, team: 'United Warriors', played: 18, won: 12, drawn: 4, lost: 2, points: 40, form: ['D', 'W', 'W', 'D', 'W'] },
  { position: 4, team: 'Athletic Elite', played: 18, won: 11, drawn: 3, lost: 4, points: 36, form: ['W', 'L', 'W', 'W', 'L'] },
  { position: 5, team: 'Strikers FC', played: 18, won: 9, drawn: 5, lost: 4, points: 32, form: ['D', 'W', 'D', 'L', 'W'] },
];

function StandingsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">League Standings</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Current positions across all competitions
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">Pos</th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">Team</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">P</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">W</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">D</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">L</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">Pts</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">Form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {standings.map((standing) => (
                  <tr
                    key={standing.position}
                    className={`hover:bg-slate-50 transition-colors ${standing.highlight ? 'bg-emerald-50' : ''}`}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        {standing.position === 1 && <Medal className="w-5 h-5 text-amber-500" />}
                        <span className={`text-lg font-bold ${standing.highlight ? 'text-emerald-700' : 'text-slate-700'}`}>
                          {standing.position}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-semibold ${standing.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                          {standing.team}
                        </span>
                        {standing.highlight && (
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-slate-700 font-medium">{standing.played}</td>
                    <td className="px-6 py-5 text-center text-slate-700 font-medium">{standing.won}</td>
                    <td className="px-6 py-5 text-center text-slate-700 font-medium">{standing.drawn}</td>
                    <td className="px-6 py-5 text-center text-slate-700 font-medium">{standing.lost}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={`text-lg font-bold ${standing.highlight ? 'text-emerald-700' : 'text-slate-900'}`}>
                        {standing.points}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex justify-center gap-1">
                        {standing.form.map((result, idx) => (
                          <div
                            key={idx}
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                              result === 'W' ? 'bg-emerald-500' : result === 'D' ? 'bg-slate-400' : 'bg-red-500'
                            }`}
                          >
                            {result}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
            <span className="text-slate-700 font-medium">Win</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-slate-400"></div>
            <span className="text-slate-700 font-medium">Draw</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-red-500"></div>
            <span className="text-slate-700 font-medium">Loss</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StandingsSection;
