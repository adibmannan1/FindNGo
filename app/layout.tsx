import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GearShow",
  description: "GearShow brings you the best cars from around the world. Find your dream car with GearShow. Sell your car with GearShow. Buy your car with GearShow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollbarWidth: 'none' }}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
