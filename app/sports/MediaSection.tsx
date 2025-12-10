import { Play, Image, Video } from 'lucide-react';

const media = [
  {
    id: 1,
    type: 'video',
    title: 'Cricket Finals Highlights',
    thumbnail: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '5:42',
    views: '12.5K'
  },
  {
    id: 2,
    type: 'gallery',
    title: 'Rugby Season Photo Album',
    thumbnail: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '48 photos',
    views: '8.2K'
  },
  {
    id: 3,
    type: 'video',
    title: 'Football Best Goals',
    thumbnail: 'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '8:15',
    views: '15.3K'
  },
  {
    id: 4,
    type: 'gallery',
    title: 'Athletics Championship',
    thumbnail: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '62 photos',
    views: '6.7K'
  },
  {
    id: 5,
    type: 'video',
    title: 'Volleyball Tournament Recap',
    thumbnail: 'https://images.pexels.com/photos/1544014/pexels-photo-1544014.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6:28',
    views: '9.1K'
  },
  {
    id: 6,
    type: 'gallery',
    title: 'Training Session Moments',
    thumbnail: 'https://images.pexels.com/photos/209954/pexels-photo-209954.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '35 photos',
    views: '5.4K'
  }
];

function MediaSection() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Media Gallery</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Relive the greatest moments through our collection of photos and videos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {media.map((item) => (
            <div key={item.id} className="group relative bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    {item.type === 'video' ? (
                      <Play className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" />
                    ) : (
                      <Image className="w-8 h-8 text-slate-900" />
                    )}
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  {item.type === 'video' ? (
                    <div className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-lg text-xs font-semibold flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      {item.duration}
                    </div>
                  ) : (
                    <div className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-lg text-xs font-semibold flex items-center gap-1">
                      <Image className="w-3 h-3" />
                      {item.count}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="text-slate-400 text-sm">{item.views} views</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Explore Full Gallery
          </button>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-slate-800 text-center">
        <p className="text-slate-400 text-sm">
          © 2025 Multi-Sport Club. All rights reserved. | Champions on and off the field.
        </p>
      </div>
    </section>
  );
}

export default MediaSection;
