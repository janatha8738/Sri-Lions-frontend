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
    { name: "Rugby", path: "/sports/rugby" },
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
    `transition-colors ${pathname === path ? "text-[#800000] font-semibold" : "hover:text-[#800000]"}`;

  return (
    <nav
      className={`fixed left-0 w-full z-40 backdrop-blur-md transition-all duration-300 shadow-lg ${
        isScrolled ? "top-[-5px] bg-[#000000]/45" : "md:top-[36px] top-0 bg-[#000000]/45"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sri Lions Club Logo"
                width={75}
                height={75}
                className="cursor-pointer"
              />
              <div className="leading-tight">
                <h1 className={`${montserrat.className} text-2xl font-extrabold text-white`}>
                  SRI LIONS
                </h1>
                <p className="text-xs text-gray-300 tracking-wide">Symbol of Pride</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation + Login Button */}
        <div className="hidden md:flex items-center gap-10 text-[17px] font-medium text-white">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/news" className={linkClass("/news")}>News</Link>

          {/* Sports Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => { setIsSportsOpen(true); setIsHovering(true); }}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button className="hover:text-[#800000] transition-colors flex items-center gap-1">
              Sports
            </button>

            <ul
              className={`absolute bg-[#5a0a0a] top-full mt-2 py-2 w-48 rounded-md shadow-lg z-50 transform transition-all duration-300 origin-top ${
                isSportsOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {sports.map((sport) => (
                <li key={sport.name}>
                  <Link href={sport.path} className="block px-4 py-2 hover:bg-[#661010] transition">
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/events" className={linkClass("/events")}>Events</Link>
          <Link href="/about" className={linkClass("/about")}>About Us</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>

          {/* LOGIN BUTTON (Desktop) */}
          <Link
            href="/login"
            className="flex items-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-5 py-2 rounded-full transition-all font-semibold"
          >
            <LogIn size={18} />
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Login Button */}
          <Link href="/login" className="text-white">
            <LogIn size={24} />
          </Link>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-[#5a0a0a] text-white overflow-hidden transition-all duration-300 ${
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
              className="w-full flex justify-between items-center hover:text-gray-300"
            >
              Sports <span>{isMobileSportsOpen ? "Up Arrow" : "Down Arrow"}</span>
            </button>
            <ul className={`transition-all duration-300 overflow-hidden ${isMobileSportsOpen ? "max-h-[400px]" : "max-h-0"}`}>
              {sports.map((sport) => (
                <li key={sport.name}>
                  <Link href={sport.path} className="block px-8 py-2 hover:bg-[#661010]" onClick={() => setIsMobileMenuOpen(false)}>
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link href="/events" className={linkClass("/events")} onClick={() => setIsMobileMenuOpen(false)}>Events</Link></li>
          <li><Link href="/about" className={linkClass("/about")} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/contact" className={linkClass("/contact")} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>

          {/* Mobile Login Button in Menu */}
          <li className="pt-4 border-t border-white/20">
            <Link
              href="/login"
              className="flex items-center gap-3 bg-[#800000] hover:bg-[#660000] text-white px-6 py-3 rounded-full font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn size={20} />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}