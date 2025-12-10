import { LucideIcon } from 'lucide-react';

interface SportCardProps {
  sport: {
    id: string;
    name: string;
    icon: LucideIcon;
    image: string;
    color: string;
    bgColor: string;
    textColor: string;
    description: string;
  };
}

function SportCard({ sport }: SportCardProps) {
  const Icon = sport.icon;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={sport.image}
          alt={sport.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
        <div className="absolute top-6 left-6">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <Icon className={`w-7 h-7 ${sport.textColor}`} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-3">{sport.name}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">{sport.description}</p>

        <button className={`w-full py-4 bg-gradient-to-r ${sport.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default SportCard;
