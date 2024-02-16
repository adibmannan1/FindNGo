import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <Image src="/assets/images/hero.png" alt="hero-image" width={500} height={500} />
    </main>
  );
}
