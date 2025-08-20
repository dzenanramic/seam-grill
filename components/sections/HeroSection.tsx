// components/sections/HeroSection.tsx
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh]">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="/pite2.jpg"
        alt="Pite pod sačem Front"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom" // 👈 shows more of the bottom part
        className="z-0"
      />

      <div className="container px-4 py-32 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 text-white">
            {/* <span className="text-red-500">Pite pod sačem</span>  */}
            Pite pod sačem
          </h1>
          <p className="text-xl mb-8 text-white">
            Najukusnije pite u Banja Luci
          </p>
          <Link href="/menu" passHref>
            <Button className="bg-[#E11D48] hover:bg-[#BE123C] text-white">
              Pogledaj meni
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
