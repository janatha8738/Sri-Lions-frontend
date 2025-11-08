"use client";

import { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 w-full bg-[#280202] text-white text-sm py-2 px-4 z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6">
        {/* Left side: Email + Address */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-white" />
            <a
              href="mailto:info@sri-lions.com"
              className="hover:underline hover:text-gray-200"
            >
              info@sri-lions.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-white" />
            <span>No. 4, Lumbini Sports Complex, Colombo, Sri Lanka</span>
          </div>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex items-center gap-4 justify-center sm:justify-end mt-1 sm:mt-0">
          <a
            href="https://facebook.com/srilions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://instagram.com/srilions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
