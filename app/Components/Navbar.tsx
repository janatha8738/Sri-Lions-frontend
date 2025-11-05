"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Montserrat } from "next/font/google";

// ✅ Import Montserrat ExtraBold for the heading
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"], // ExtraBold
});

export default function Navbar() {
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSportsOpen, setIsMobileSportsOpen] = useState(false);

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
    let timer: NodeJS.Timeout;
    if (!isHovering) {
      timer = setTimeout(() => setIsSportsOpen(false), 200);
    }
    return () => clearTimeout(timer);
  }, [isHovering]);

  return (
    <nav className="bg-[#090202] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left side - Logo + Text */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sri Lions Club Logo"
                width={85}
                height={85}
                className="cursor-pointer"
              />

              {/* Text next to logo */}
              <div className="leading-tight">
                <h1
                  className={`${montserrat.className} text-2xl font-extrabold text-white`}
                >
                  SRI LIONS
                </h1>
                <p className="text-xs text-gray-300 tracking-wide">
                  Symbol of Pride
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-[17px] font-medium items-center">
          <li><Link href="/" className="hover:text-[#800000] transition-colors">Home</Link></li>
          <li><Link href="/news" className="hover:text-[#800000] transition-colors">News</Link></li>

          {/* Sports Dropdown (Desktop) */}
          <li
            className="relative"
            onMouseEnter={() => {
              setIsSportsOpen(true);
              setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button className="hover:text-[#800000] transition-colors flex items-center">
              Sports ▾
            </button>

            <ul
              className={`absolute bg-[#5a0a0a] top-full mt-2 py-2 w-48 rounded-md shadow-lg z-50 transform transition-all duration-300 origin-top ${
                isSportsOpen
                  ? "opacity-100 scale-y-100 visible"
                  : "opacity-0 scale-y-0 invisible"
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {sports.map((sport) => (
                <li key={sport.name}>
                  <Link
                    href={sport.path}
                    className="block px-4 py-2 hover:bg-[#661010] transition"
                  >
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link href="/events" className="hover:text-[#800000] transition-colors">Events</Link></li>
          <li><Link href="/about" className="hover:text-[#800000] transition-colors">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-[#800000] transition-colors">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-[#5a0a0a] text-white overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 p-5 text-[17px] font-medium">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/news" className="hover:text-gray-300">News</Link></li>

          {/* Sports Dropdown (Mobile) */}
          <li>
            <button
              onClick={() => setIsMobileSportsOpen(!isMobileSportsOpen)}
              className="w-full flex justify-between items-center hover:text-gray-300"
            >
              Sports
              <span>{isMobileSportsOpen ? "▴" : "▾"}</span>
            </button>

            <ul
              className={`transition-all duration-300 overflow-hidden ${
                isMobileSportsOpen ? "max-h-[400px]" : "max-h-0"
              }`}
            >
              {sports.map((sport) => (
                <li key={sport.name}>
                  <Link
                    href={sport.path}
                    className="block px-4 py-2 hover:bg-[#661010] transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link href="/events" className="hover:text-gray-300">Events</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
