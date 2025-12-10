import { Users, Award, TrendingUp, Calendar } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Members', value: '2,500+', color: 'text-blue-600' },
  { icon: Award, label: 'Championships Won', value: '147', color: 'text-emerald-600' },
  { icon: TrendingUp, label: 'Years of Excellence', value: '25', color: 'text-orange-600' },
  { icon: Calendar, label: 'Events Annually', value: '200+', color: 'text-red-600' }
];

function OverviewSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Club Overview</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A legacy of sporting excellence built on dedication, teamwork, and the pursuit of victory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${stat.color} bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <Icon className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              We are committed to fostering athletic excellence and personal growth through competitive sports. Our multi-sport club provides world-class facilities, expert coaching, and a supportive community where athletes of all levels can thrive and reach their full potential.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              From grassroots development to elite competition, we champion the values of teamwork, discipline, and sportsmanship. Join us in our journey to create champions both on and off the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
