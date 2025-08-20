// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialsSection from "@/components/sections/TestemonialSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pite pod sačem – Banja Luka",
  description: "Ukusna hrana, srdačna usluga. Posjetite nas u Banja Luci!",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      <HeroSection />
      <MenuSection />
      <TestimonialsSection />
    </main>
  );
}
