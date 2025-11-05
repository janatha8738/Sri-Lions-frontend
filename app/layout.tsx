import "./globals.css";
import Header from "../app/Components/Header";
import Navbar from "@/app/Components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Lions Sports Club",
  description: "Official website of Sri Lions Sports Club",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}