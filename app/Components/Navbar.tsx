"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation"; // ✅ Import pathname hook

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"], // ExtraBold
});

export default function Navbar() {
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSportsOpen, setIsMobileSportsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname(); // ✅ Current route

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

  // Delay closing sports dropdown
  useEffect(() => {
    let timer: any;
    if (!isHovering) {
      timer = setTimeout(() => setIsSportsOpen(false), 200);
    }
    return () => clearTimeout(timer);
  }, [isHovering]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Active link style helper
  const linkClass = (path: string) =>
    `transition-colors ${
      pathname === path ? "text-[#800000] font-semibold" : "hover:text-[#800000]"
    }`;

  return (
    <nav
      className={`fixed left-0 w-full z-40 backdrop-blur-md transition-all duration-300 shadow-lg ${
        isScrolled
          ? "top-[-5px] bg-[#000000]/45"
          : "md:top-[36px] top-0 bg-[#000000]/45"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
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
        <ul className="hidden md:flex space-x-10 text-[17px] font-medium items-center text-white">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/news" className={linkClass("/news")}>
              News
            </Link>
          </li>

          {/* Sports Dropdown */}
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

          <li>
            <Link href="/events" className={linkClass("/events")}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
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
          <li>
            <Link href="/" className={linkClass("/")} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/news" className={linkClass("/news")} onClick={() => setIsMobileMenuOpen(false)}>
              News
            </Link>
          </li>

          {/* Sports (Mobile Dropdown) */}
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

          <li>
            <Link href="/events" className={linkClass("/events")} onClick={() => setIsMobileMenuOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")} onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={linkClass("/contact")} onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
