import type { Metadata } from "next";
import '../globals.css';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

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
    <div className="flex h-screen flex-col">
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer />
    </div>
  );
}
