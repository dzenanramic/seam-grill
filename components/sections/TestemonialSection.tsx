// components/sections/TestimonialsSection.tsx
"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mario",
    role: "Gost",
    letter: "M",
    text: "Danas prvi put bio po preporuci....prosto sam iznenadjen hranom i osobljem... sve svježe i bogat izbor, cjene za kvalitet dobre....prepostavljam da sam i sa gazdom malo popričao ....sve za 5 💥‼️",
  },
  {
    name: "Aleksandar",
    role: "Lokalni vodič",
    letter: "A",
    text: "Najbolja pita u BL. Jako ljubazno osoblje. Uvijek rado dodjem.",
  },
  {
    name: "Borjana",
    role: "Posjetilac",
    letter: "B",
    text: "Najbolja pita u gradu. Osoblje uslužno, Cijene pristupačne. Sve pohvale.",
  },
];

export default function TestimonialsSection() {
  return (
    <>
      <section className="py-16 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">Šta kažu naši gosti</h2>
            <p className="text-[#FBBF24] text-xl max-w-2xl mx-auto">
              Naš ponos i radost su zadovoljni gosti koji se uvijek rado vraćaju
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-8xl mx-auto">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="bg-[#FBBF24] hover:scale-105 transition-transform border-0 w-full max-w-sm"
              >
                <CardContent className="pt-6">
                  <div className="text-yellow text-2xl mb-4">★★★★★</div>
                  <p className="text-[#E11D48] mb-6">{t.text}</p>
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarFallback>{t.letter}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-black">{t.name}</h4>
                      <p className="text-sm text-black">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
