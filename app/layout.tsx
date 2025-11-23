import "./globals.css";
import LogoPreloader from "./components/LogoPreloader";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Lions Sports Club",
  description: "Official website of Sri Lions Sports Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* ✅ Logo Preloader covers everything at first */}
        <LogoPreloader />

        {/* ✅ Main site content (hidden under preloader at first) */}
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
