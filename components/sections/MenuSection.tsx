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
      {/* <Separator className="my-16 bg-gray-900" /> */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Naša ponuda</h2>
            <p className="text-muted-foreground">
              Uživajte u našim specijalitetima pripremljenim sa pažnjom i
              ljubavlju
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card
                key={item.title}
                className="bg-[#1E1E1E] hover:scale-105 transition-transform border-0"
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
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-4">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" passHref>
              <Button className="bg-[#E11D48] hover:bg-[#BE123C] text-white">
                Pogledaj cijeli meni
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
