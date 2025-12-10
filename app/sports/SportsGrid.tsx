import { Trophy, Target, Flame, Zap, Medal, Heart } from 'lucide-react';
import SportCard from './SportCard';

const sports = [
  {
    id: 'cricket',
    name: 'Cricket',
    icon: Trophy,
    image: 'https://images.pexels.com/photos/1331750/pexels-photo-1331750.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    description: 'Premier cricket teams competing at all levels'
  },
  {
    id: 'rugby',
    name: 'Rugby',
    icon: Target,
    image: 'https://images.pexels.com/photos/209954/pexels-photo-209954.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-600 to-rose-700',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    description: 'Power, passion, and precision on the field'
  },
  {
    id: 'football',
    name: 'Football',
    icon: Flame,
    image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    description: 'Beautiful game played with heart and skill'
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    icon: Zap,
    image: 'https://images.pexels.com/photos/1544014/pexels-photo-1544014.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    description: 'Dynamic team play and explosive action'
  },
  {
    id: 'athletics',
    name: 'Athletics',
    icon: Medal,
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-slate-700 to-slate-900',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-700',
    description: 'Track and field excellence across all disciplines'
  },
  {
    id: 'netball',
    name: 'Netball',
    icon: Heart,
    image: 'https://images.pexels.com/photos/5386898/pexels-photo-5386898.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-pink-500 to-purple-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    description: 'Fast-paced, skillful, and inclusive team sport'
  }
];

function SportsGrid() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Choose Your Sport</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our diverse range of sports divisions, each offering exceptional training and competitive opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <SportCard key={sport.id} sport={sport} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SportsGrid;