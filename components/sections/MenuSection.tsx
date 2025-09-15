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
    desc: "Pravi tradicionalni burek, sočna pita punjena finim mljevenim mesom, savršeno hrskava izvana i mekana iznutra. Klasičan izbor koji nikada ne razočara.",
  },
  {
    title: "Sirnica",
    img: "/sirnica.jpg",
    price: "9 KM",
    desc: "Autentična sirnica pripremljena s najkvalitetnijim sirom. Njezina lagana i kremasta unutrašnjost savršeno se sljubljuje s hrskavim korama, stvarajući omiljeni zalogaj za svako doba dana.",
  },
  {
    title: "Zeljanica",
    img: "/zeljanica.jpg",
    price: "8 KM",
    desc: "Osvježavajuća zeljanica, savršena kombinacija svježe blitve i kremastog sira. Lagana i izuzetno ukusna, idealan izbor za one koji traže nešto zdravo i izdašno.",
  },
  {
    title: "Sjeckani burek",
    img: "/sjeckani-burek.jpg",
    price: "6 KM",
    desc: "Sjeckani burek—idealno rješenje za brzi, a istovremeno bogat obrok. Kockice sočnog mesa u hrskavim korama nude robustan okus i savršeno zadovoljstvo u svakom zalogaju.",
  },
  {
    title: "Krompiruša",
    img: "/krompirusa.jpg",
    price: "5 KM",
    desc: "Uživaj u bogatom okusu tradicionalne krompiruše. Jednostavna, ali neodoljiva pita s krumpirom i začinima, pečena do savršenstva, pruža pravi domaći doživljaj.",
  },
  {
    title: "Pita sa gljivama",
    img: "/pita-gljive.jpg",
    price: "10 KM",
    desc: "Prava delicija za ljubitelje gljiva! Naša pita sa gljivama je aromatična kombinacija svježih šampinjona, kreme i začina, sve upakovano u hrskavu, zlatnu koru. Sočno, mirisno i potpuno neodoljivo.",
  },
  {
    title: "Pita sa tikvama",
    img: "/pita-tikve.jpg",
    price: "8 KM",
    desc: "Neobična i očaravajuća, naša pita sa tikvama je sezonski specijalitet koji balansira slatke i slane note. Lagana i savršeno začinjena, pruža jedinstveno iskustvo okusa.",
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
