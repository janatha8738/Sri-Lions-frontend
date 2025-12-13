"use client";
import { useState } from 'react';
import { Trophy, Users, Calendar, Target, Award, TrendingUp, Heart, Star } from 'lucide-react';

export default function NetballPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const teamImages = [
    '/images/netball-team-1.jpg',
    '/images/netball-team-2.jpg',
    '/images/netball-team-3.jpg'
  ];

  const achievements = [
    { year: '2024', title: 'National Championship Winners', icon: Trophy },
    { year: '2023', title: 'Inter-Club Tournament - Gold Medal', icon: Award },
    { year: '2023', title: 'Best Defence Team Award', icon: Target },
    { year: '2022', title: 'Regional Champions', icon: Star }
  ];

  const teams = [
    { name: 'Senior Women', level: 'Elite', players: 12, coach: 'Sarah Fernando' },
    { name: 'Under-19', level: 'Development', players: 15, coach: 'Nimali Silva' },
    { name: 'Under-16', level: 'Youth', players: 18, coach: 'Rashmi Perera' },
    { name: 'Under-13', level: 'Junior', players: 20, coach: 'Kasuni Dias' }
  ];

  const upcomingMatches = [
    { date: 'Dec 20, 2024', opponent: 'Colombo Stars', venue: 'Sugathadasa Stadium', time: '4:00 PM' },
    { date: 'Jan 5, 2025', opponent: 'Kandy Royals', venue: 'Away', time: '3:30 PM' },
    { date: 'Jan 15, 2025', opponent: 'Galle Warriors', venue: 'Home', time: '5:00 PM' }
  ];

  const stats = [
    { label: 'Active Players', value: '65+', icon: Users },
    { label: 'Championships Won', value: '12', icon: Trophy },
    { label: 'Years of Excellence', value: '15', icon: TrendingUp },
    { label: 'Community Members', value: '200+', icon: Heart }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10"></div>
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-transparent bg-clip-text">
                  SRI LIONS NETBALL
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Empowering Athletes Through Speed, Precision & Teamwork
                </p>
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 rounded-lg border-2 border-red-500 shadow-2xl inline-block">
                    <p className="text-white font-bold text-lg md:text-xl leading-relaxed">
                      FIRST EVER SRI LANKAN<br />
                      INTERNATIONAL NETBALL LEAGUE<br />
                      <span className="text-yellow-400">ORGANIZED BY SIRI LIONS</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-full font-semibold transition transform hover:scale-105">
                    Join Our Team
                  </button>
                  <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-full font-semibold transition">
                    View Schedule
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-2xl opacity-20"></div>
                <img 
                  src={teamImages[0]}
                  alt="Sri Lions Netball Team"
                  className="relative rounded-2xl shadow-2xl border-4 border-yellow-500/30 w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23991b1b" width="800" height="600"/%3E%3Cg fill="%23fff" opacity="0.1"%3E%3Ccircle cx="400" cy="300" r="150"/%3E%3Ccircle cx="400" cy="300" r="100"/%3E%3Ccircle cx="400" cy="300" r="50"/%3E%3C/g%3E%3Ctext x="400" y="320" font-size="48" fill="%23fff" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold"%3ESri Lions Netball%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-slate-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center transform hover:scale-110 transition">
                  <Icon className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-slate-950/90 sticky top-0 z-10 border-b border-yellow-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'teams', 'matches', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 font-semibold capitalize whitespace-nowrap transition ${
                  activeTab === tab
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Our Journey in Pictures</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {teamImages.map((img, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={img}
                      alt={`Sri Lions Netball ${index + 1}`}
                      className="w-full h-80 object-cover rounded-xl border-2 border-yellow-500/30 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-lg">
                        {index === 0 && 'Sri Lions International League Team'}
                        {index === 1 && 'Championship Winners 2024'}
                        {index === 2 && 'Second Annual Tournament Champions'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-950/80 p-8 rounded-2xl border border-yellow-800/20">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sri Lions Netball is dedicated to developing world-class athletes who embody excellence, 
                  discipline, and sportsmanship. We believe in nurturing talent from grassroots to elite levels.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our comprehensive training programs focus on technical skills, tactical awareness, 
                  physical conditioning, and mental resilience, ensuring our players excel both on and off the court.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-950/80 p-8 rounded-2xl border border-orange-800/20">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">Training Excellence</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">▸</span>
                    <span className="text-gray-300">Professional coaching from certified international trainers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">▸</span>
                    <span className="text-gray-300">State-of-the-art facilities at Lumbini Sports Complex</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">▸</span>
                    <span className="text-gray-300">Specialized fitness and nutrition programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">▸</span>
                    <span className="text-gray-300">Mental conditioning and sports psychology support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'teams' && (
          <div>
            <h2 className="text-4xl font-bold mb-10 text-center">Our Teams</h2>
            
            {/* Team Photo Gallery */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={teamImages[1]}
                  alt="Sri Lions Netball Teams"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"%3E%3Crect fill="%23450a0a" width="1200" height="400"/%3E%3Cg fill="%23dc2626" opacity="0.2"%3E%3Ccircle cx="300" cy="200" r="80"/%3E%3Ccircle cx="600" cy="200" r="80"/%3E%3Ccircle cx="900" cy="200" r="80"/%3E%3C/g%3E%3Ctext x="600" y="220" font-size="36" fill="%23fff" text-anchor="middle" font-family="Arial, sans-serif"%3EOur Netball Teams%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-3xl font-bold text-white mb-2">United by Passion, Driven by Excellence</h3>
                  <p className="text-gray-300">From juniors to elite athletes, every player is part of the Sri Lions family</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-950/70 p-8 rounded-2xl border border-yellow-800/20 hover:border-yellow-600/40 transition transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-yellow-400">{team.name}</h3>
                    <span className="px-4 py-1 bg-yellow-600/20 rounded-full text-sm">{team.level}</span>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <p><span className="text-yellow-400 font-semibold">Players:</span> {team.players}</p>
                    <p><span className="text-yellow-400 font-semibold">Head Coach:</span> {team.coach}</p>
                  </div>
                  <button className="mt-6 w-full py-2 bg-yellow-600/20 hover:bg-yellow-600 rounded-lg transition font-semibold">
                    View Team Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'matches' && (
          <div>
            <h2 className="text-4xl font-bold mb-10 text-center">Upcoming Matches</h2>
            <div className="space-y-6">
              {upcomingMatches.map((match, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 p-6 rounded-xl border border-yellow-800/20 hover:border-yellow-600/40 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-10 h-10 text-yellow-500" />
                      <div>
                        <p className="text-xl font-bold text-white">{match.date}</p>
                        <p className="text-gray-400">{match.time}</p>
                      </div>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="text-2xl font-bold text-yellow-400">Sri Lions vs {match.opponent}</p>
                      <p className="text-gray-400 mt-1">{match.venue}</p>
                    </div>
                    <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition font-semibold">
                      Get Tickets
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div>
            <h2 className="text-4xl font-bold mb-10 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-yellow-900/20 to-slate-900/40 p-8 rounded-2xl border border-yellow-800/20 hover:border-yellow-600/40 transition transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-12 h-12 text-yellow-500" />
                      <span className="text-3xl font-bold text-yellow-400">{achievement.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Pride?</h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you're a beginner or an experienced player, Sri Lions Netball welcomes you to be part of our growing family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-yellow-600 hover:bg-gray-100 rounded-full font-bold transition transform hover:scale-105">
              Register Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-yellow-600 rounded-full font-bold transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}