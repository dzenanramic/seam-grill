import React from "react";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Saznajte više o restoranu Pite pod sačem u Banja Luci. Tradicija, kvalitet i ljubaznost.",
  openGraph: {
    title: "O nama | Pite pod sačem Sač",
    description:
      "Saznajte više o restoranu Pite pod sačem u Banja Luci. Tradicija, kvalitet i ljubaznost.",
    url: "https://yourdomain.com/about",
    images: [
      {
        url: "/pite.jpg",
        width: 1200,
        height: 630,
        alt: "Tim restorana Pite pod sačem Sač Banja Luka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "O nama | Pite pod sačem Sač",
    description:
      "Saznajte više o restoranu Pite pod sačem u Banja Luci. Tradicija, kvalitet i ljubaznost.",
    images: ["/pite.jpg"],
  },
};

function AboutPage() {
  return (
    <main className=" bg-[#FBBF24] text-[#E0E0E0]">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/pite.jpg"
          alt="Tim restorana Pite pod sačem Banja Luka"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="container px-4 py-32 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 text-white">O nama</h1>
            <p className="text-xl mb-8 text-white">
              Tradicija, kvalitet i ljubaznost – Pite pod sačem
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-[#c90404] text-3xl font-bold mb-6">Naša priča</h2>
          <p className="text-lg mb-6 text-[#c90404]">
            Pite pod sačem je porodični restoran u srcu Banja Luke, poznat po
            autentičnim pitama ispod sača i roštilju pripremljenom po
            tradicionalnim receptima. Naša misija je da gostima pružimo
            nezaboravno gastronomsko iskustvo uz domaću atmosferu i srdačnu
            uslugu.
          </p>
          <p className="text-lg mb-6 text-[#c90404]">
            Svaka pita, svaki komad mesa i svaki osmijeh našeg osoblja rezultat
            su ljubavi prema kuhinji i gostima. Posjetite nas i uvjerite se
            zašto smo omiljeni izbor za sve generacije!
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
