// components/sections/HeroSection.tsx
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with improved overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pite2.jpg"
          alt="Pite pod sačem Front"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent z-20 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-20 opacity-80"></div>

      {/* Content */}
      <div className="container px-4 relative z-30 h-[90%] flex flex-col justify-around sm:justify-around md:justify-start items-center text-center pt-10 sm:pt-[0px] md:pt-32 pb-12">
        <div
          className={`max-w-3xl w-full mx-auto transition-all duration-1000 ease-out transform ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main heading with improved typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#c90404] leading-tight">
            <span className="text-[#FBBF24] drop-shadow-md">Pite</span> pod
            sačem{" "}
            <span className="text-[#FBBF24] drop-shadow-md">
              &quot;Sač&quot;
            </span>
          </h1>
          {/* Description with improved styling */}
          <p className="text-xl md:text-2xl mb-10 text-light max-w-2xl mx-auto leading-relaxed font-light">
            Doživite autentični okus tradicionalne bosanske kuhinje -
            najukusnije pite u Banja Luci
          </p>
        </div>
        {/* CTA Buttons at the bottom */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-3xl">
          <Link href="/menu" passHref>
            <Button
              variant="outline"
              size="lg"
              className="bg-[#FBBF24] border-brown text-brown hover:bg-yellow hover:text-brown px-8 py-8 text-xl text-black font-semibold rounded-full transition-all duration-300 min-w-[220px] w-full sm:w-[220px]"
            >
              Pogledaj meni
            </Button>
          </Link>
          <a href="tel:+38765706148">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#c90404] to-[#e60505] border-2 border-[#e60505] text-white hover:bg-gradient-to-r hover:from-[#FBBF24] hover:to-[#f0c933] hover:text-black px-8 py-8 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#FBBF24]/30 min-w-[220px] w-full sm:w-[220px] relative overflow-hidden group"
            >
              <span className="relative z-10">Naruči i uživaj</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBBF24] to-[#f0c933] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
