import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"], 
weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "FindNGo",
  description: "Discover, create, and experience unforgettable events with our cutting-edge event management web app. Seamlessly create and promote your events, purchase tickets effortlessly, and explore a diverse array of exciting gatherings. Elevate your event experience with our intuitive platform designed to connect enthusiasts, organizers, and attendees. Join us in shaping memorable moments and making every event an extraordinary celebration, Host unforgettable events, find exciting experiences, and connect with your community with all in one app! Create, manage, and sell tickets for your events with ease, while discovering amazing happenings based on your interests. Network with attendees, share updates, and join the movement for seamless event experiences.",
  icons: {
    icon: "/assets/images/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='poppins.variable}'>{children}</body>
      </html>
    </ClerkProvider>
  );
}
