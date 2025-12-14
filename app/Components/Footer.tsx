import { Facebook, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "Siri Lions secure victory in championship finals",
    date: "5th December 2024",
    image: "https://images.unsplash.com/photo-1575368643250-2e27e2be8f7e?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    title: "New training facility opens at Negombo grounds",
    date: "28th November 2024",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    title: "Siri Lions announce squad for upcoming sevens tournament",
    date: "20th November 2024",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=100&h=100&fit=crop",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="bg-[#1a1a1a] py-16">
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 xl:gap-20">

            {/* Club Info Section */}
            <div className="space-y-6 max-w-md">
              <div className="flex items-center gap-3">
                {/* Logo – correct syntax */}
                <div className="relative w-24 h-24 bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/logo.png"           // correct path (no comment inside)
                    alt="Siri Lions RFC Logo"
                    width={96}
                    height={96}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <p className="text-sm leading-relaxed">
                Siri Lions RFC is a fully licensed and legally compliant "not for profit"
                community Rugby club that also offers competitive Netball to its members.
              </p>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300 flex items-center justify-center gap-2">
                <span className="text-lg">Right Arrow</span>
                <span>JOIN THE LIONS!</span>
              </button>
            </div>

            {/* Latest News */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6 uppercase">Latest News</h3>
              <div className="space-y-4">
                {newsItems.map((item) => (
                  <div key={item.id} className="flex gap-3 group cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-medium leading-tight mb-1 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6 uppercase">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Address:</h4>
                  <p className="text-sm text-gray-400">
                    Lewis Place Ground, Negombo,<br />
                    Western Province, Sri Lanka.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Email:</h4>
                  <a href="mailto:info@sirilionsrfc.com" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
                    info@sirilionsrfc.com
                  </a>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Tel:</h4>
                  <a href="tel:+94771234567" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
                    +94 (77) 123 4567
                  </a>
                </div>

                <div className="flex gap-3 pt-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded flex items-center justify-center transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded flex items-center justify-center transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded flex items-center justify-center transition-colors"><Youtube className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded flex items-center justify-center transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded flex items-center justify-center transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* Find Us */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6 uppercase">Find Us</h3>
              <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                  alt="Map location"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-red-700 transition-colors">
                    View larger map
                  </div>
                </div>
              </div>
              <a href="#" className="text-sm text-gray-400 hover:text-red-600 transition-colors inline-block mt-3">
                Google Maps Right Arrow
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}