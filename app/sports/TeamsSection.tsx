import { Shield, Users, Star } from 'lucide-react';

const teams = [
  {
    name: 'Senior Cricket',
    division: 'Premier League',
    players: 25,
    image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'emerald'
  },
  {
    name: 'Rugby First XV',
    division: 'Championship',
    players: 30,
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'red'
  },
  {
    name: 'Football Squad',
    division: 'Division 1',
    players: 28,
    image: 'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'blue'
  },
  {
    name: 'Volleyball Elite',
    division: 'National League',
    players: 18,
    image: 'https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'orange'
  }
];

function TeamsSection() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Teams</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Meet the squads representing our club at the highest levels of competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team) => (
            <div key={team.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${team.color}-900 via-${team.color}-900/50 to-transparent opacity-80`}></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{team.name}</h3>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">{team.division}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{team.players} Players</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <button className={`w-full py-3 bg-${team.color}-600 text-white font-semibold rounded-xl hover:bg-${team.color}-700 transition-colors flex items-center justify-center gap-2`}>
                  <Star className="w-5 h-5" />
                  View Team Roster
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamsSection;
