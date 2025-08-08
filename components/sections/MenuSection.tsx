// components/sections/MenuSection.tsx
"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    title: "Sač",
    img: "/sac.jpg",
    price: "7 KM",
    desc: "Domaće pite pečene ispod sača, hrskave korice i bogatog nadjeva",
  },
  {
    title: "Roštilj",
    img: "/rostilj.jpg",
    price: "9 KM",
    desc: "Sočno meso s roštilja, pažljivo začinjeno i pečeno na ćumuru",
  },
  {
    title: "Doner",
    img: "/doner.jpg",
    price: "8 KM",
    desc: "Turski specijalitet s mariniranim mesom, svježim povrćem i domaćim umacima u lepinji",
  },
];

export default function MenuSection() {
  return (
    <>
      <Separator className="my-16 bg-gray-900" />
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
                  <Badge variant="destructive">{item.price}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-4">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#E11D48] hover:bg-[#BE123C] text-white">
              Pogledaj cijeli meni
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
