import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Space_Grotesk} from 'next/font/google'
 
const grotesk = Space_Grotesk({
  weight: ['500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" style={{ scrollbarWidth: 'none' }} className={`${grotesk.className}`}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
