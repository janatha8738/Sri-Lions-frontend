"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Navbar() {
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSportsOpen, setIsMobileSportsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const sports = [
    { name: "Rugby", path: "/Rugby" },
    { name: "Netball", path: "/sports/netball" },
    { name: "Cricket", path: "/sports/cricket" },
    { name: "Golf", path: "/sports/golf" },
    { name: "Other", path: "/sports/other" },
    { name: "Other2", path: "/sports/other2" },
    { name: "Other3", path: "/sports/other3" },
    { name: "Other4", path: "/sports/other4" },
    { name: "Other5", path: "/sports/other5" },
    { name: "Other6", path: "/sports/other6" },
  ];

  useEffect(() => {
    let timer: any;
    if (!isHovering) {
      timer = setTimeout(() => setIsSportsOpen(false), 200);
    }
    return () => clearTimeout(timer);
  }, [isHovering]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path: string) =>
    `transition-colors ${pathname === path ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"}`;

  return (
    <>
      {/* Top Contact Bar - New attractive design */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-yellow-600/30 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:info@sri-lions.com" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden sm:inline">info@sri-lions.com</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="hidden md:inline">No. 4, Lumbini Sports Complex, Colombo, Sri Lanka</span>
              <span className="md:hidden">Colombo, Sri Lanka</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed left-0 w-full z-40 backdrop-blur-md transition-all duration-300 shadow-xl ${
          isScrolled ? "top-[48px] bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 border-b border-yellow-600/20" : "top-[48px] bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-slate-950/90 border-b border-yellow-600/30"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl group-hover:bg-yellow-500/30 transition-all"></div>
                  <Image
                    src="/logo.png"
                    alt="Sri Lions Club Logo"
                    width={75}
                    height={75}
                    className="cursor-pointer relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="leading-tight">
                  <h1 className={`${montserrat.className} text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text`}>
                    SIRI LIONS
                  </h1>
                  <p className="text-xs text-gray-400 tracking-wide">Symbol of Pride</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-[17px] font-medium text-white">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/news" className={linkClass("/news")}>News</Link>

            {/* Sports Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsSportsOpen(true); setIsHovering(true); }}
              onMouseLeave={() => setIsHovering(false)}
            >
              <button className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                Sports
                <svg className={`w-4 h-4 transition-transform ${isSportsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <ul
                className={`absolute bg-gradient-to-b from-slate-800 to-slate-900 top-full mt-2 py-2 w-48 rounded-xl shadow-2xl border border-yellow-600/20 z-50 transform transition-all duration-300 origin-top ${
                  isSportsOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {sports.map((sport) => (
                  <li key={sport.name}>
                    <Link 
                      href={sport.path} 
                      className="block px-4 py-2 hover:bg-yellow-600/20 hover:text-yellow-400 transition"
                      onClick={() => setIsSportsOpen(false)}
                    >
                      {sport.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/events" className={linkClass("/events")}>Events</Link>
            <Link href="/about" className={linkClass("/about")}>About Us</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>

            {/* Login Button (Desktop) */}
            <Link
              href="/login"
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-2.5 rounded-full transition-all font-semibold shadow-lg hover:shadow-yellow-600/50 transform hover:scale-105"
            >
              <LogIn size={18} />
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/login" className="text-yellow-400 hover:text-yellow-300 transition">
              <LogIn size={24} />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-yellow-400 transition">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-gradient-to-b from-slate-800 to-slate-900 text-white overflow-hidden transition-all duration-300 border-t border-yellow-600/20 ${
            isMobileMenuOpen ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 p-5 text-[17px] font-medium">
            <li><Link href="/" className={linkClass("/")} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/news" className={linkClass("/news")} onClick={() => setIsMobileMenuOpen(false)}>News</Link></li>

            {/* Mobile Sports Dropdown */}
            <li>
              <button
                onClick={() => setIsMobileSportsOpen(!isMobileSportsOpen)}
                className="w-full flex justify-between items-center hover:text-yellow-400 transition"
              >
                Sports 
                <svg className={`w-4 h-4 transition-transform ${isMobileSportsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className={`transition-all duration-300 overflow-hidden ${isMobileSportsOpen ? "max-h-[400px] mt-2" : "max-h-0"}`}>
                {sports.map((sport) => (
                  <li key={sport.name}>
                    <Link 
                      href={sport.path} 
                      className="block px-8 py-2 hover:bg-yellow-600/20 hover:text-yellow-400 rounded transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sport.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link href="/events" className={linkClass("/events")} onClick={() => setIsMobileMenuOpen(false)}>Events</Link></li>
            <li><Link href="/about" className={linkClass("/about")} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/contact" className={linkClass("/contact")} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>

            <li className="pt-4 border-t border-yellow-600/20">
              <Link
                href="/login"
                className="flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg justify-center transition-all transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn size={20} />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}