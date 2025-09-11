// components/sections/MenuSection.tsx
"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "Burek",
    img: "/burek.jpg",
    price: "7 KM",
    desc: "Pita punjena mesom, tradicionalni bosanski specijalitet.",
  },
  {
    title: "Sirnica",
    img: "/sirnica.jpg",
    price: "9 KM",
    desc: "Pita punjena sirom, omiljena u cijeloj regiji.",
  },
  {
    title: "Zeljanica",
    img: "/zeljanica.jpg",
    price: "8 KM",
    desc: "Pita punjena blitvom i sirom, svježa i lagana.",
  },
];

export default function MenuSection() {
  return (
    <>
      <section className="py-16 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 text-[#c90404]">
              Naša ponuda
            </h2>
            <p className=" text-[#FBBF24] text-xl">
              Uživajte u našim specijalitetima pripremljenim sa pažnjom i
              ljubavlju
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-8xl mx-auto">
            {menuItems.map((item) => (
              <Card
                key={item.title}
                className="bg-[#FBBF24] hover:scale-105 transition-transform border-0 w-full max-w-sm"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-md"
                  />
                </div>
                <CardHeader className="flex justify-between items-start">
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#c90404" }}
                  >
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4" style={{ color: "#c90404" }}>
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" passHref>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#FBBF24] border-brown text-brown hover:bg-yellow hover:text-brown px-10 py-8 text-xl text-black font-semibold rounded-full transition-all duration-300 min-w-[220px]  sm:w-[220px]"
              >
                Pogledaj meni
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
