// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialsSection from "@/components/sections/TestemonialSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Početna",
  description:
    "Dobrodošli u Pite pod sačem – uživajte u ukusnoj hrani i domaćoj atmosferi u Banja Luci.",
  openGraph: {
    title: "Početna | Pite pod sačem Sač",
    description:
      "Dobrodošli u Pite pod sačem – uživajte u ukusnoj hrani i domaćoj atmosferi u Banja Luci.",
    url: "https://yourdomain.com/",
    images: [
      {
        url: "/burek.jpg",
        width: 1200,
        height: 630,
        alt: "Burek iz ponude Pite pod sačem Sač Banja Luka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Početna | Pite pod sačem Sač",
    description:
      "Dobrodošli u Pite pod sačem – uživajte u ukusnoj hrani i domaćoj atmosferi u Banja Luci.",
    images: ["/burek.jpg"],
  },
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
