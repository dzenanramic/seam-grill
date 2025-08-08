import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

function AboutPage() {
  return (
    <main className=" bg-[#121212] text-[#E0E0E0]">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/pite.jpg"
          alt="Seam Grill Team"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="container px-4 py-32 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 text-white">O nama</h1>
            <p className="text-xl mb-8 text-white">
              Tradicija, kvalitet i ljubaznost – to je Seam pite ispod sača.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-16 bg-gray-900" />

      {/* About Content */}
      <section className="py-16">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Naša priča</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Seam je porodični restoran u srcu Banja Luke, poznat po autentičnim
            pitama ispod sača i roštilju pripremljenom po tradicionalnim
            receptima. Naša misija je da gostima pružimo nezaboravno
            gastronomsko iskustvo uz domaću atmosferu i srdačnu uslugu.
          </p>
          <p className="text-lg mb-6 text-muted-foreground">
            Svaka pita, svaki komad mesa i svaki osmijeh našeg osoblja rezultat
            su ljubavi prema kuhinji i gostima. Posjetite nas i uvjerite se
            zašto smo omiljeni izbor za sve generacije!
          </p>
        </div>
      </section>

      <Separator className="my-16 bg-gray-900" />
    </main>
  );
}

export default AboutPage;
