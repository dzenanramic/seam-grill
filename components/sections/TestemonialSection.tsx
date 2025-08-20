// components/sections/TestimonialsSection.tsx
"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Katarina",
    role: "Redovan gost",
    letter: "K",
    text: "Vrhunski burek (sa sjeckanom teletinom), sirnica i mljevenim mesom, vrhunska usluga, tete koje rade tamo jako srdačne, jako ljubazne. Vraćamo se ponovo! Hvala, divni ste! ",
  },
  {
    name: "Aleksandar",
    role: "Lokalni vodič",
    letter: "A",
    text: "Fenomenalne pite ispod sača. Uvijek svježe i tople. Sacevi se peku na vaše oči, a nove ture samo kruže. Topla preporuka.",
  },
  {
    name: "Safet",
    role: "Posjetilac",
    letter: "S",
    text: "Definitvno svaki moj dolazak u Banja Luku je posjeta ovom restoranu, najbolje pite i osoblje.",
  },
];

export default function TestimonialsSection() {
  return (
    <>
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Šta kažu naši gosti</h2>
            <p className="text-muted-foreground">
              Naš ponos i radost su zadovoljni gosti koji se uvijek rado vraćaju
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="bg-[#1E1E1E] hover:scale-105 transition-transform border-0"
              >
                <CardContent className="pt-6">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-white mb-6">{t.text}</p>
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarFallback>{t.letter}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
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
