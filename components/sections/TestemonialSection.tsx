// components/sections/TestimonialsSection.tsx
"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Branko Nedić",
    role: "Redovan gost",
    letter: "M",
    text: "Pite su odliičnee. Kada se uzme u obzir dugogodišnja tradicija ekipe koja stoji iza ovog lokala, nije ni čudo. Oduševljen sam i definitivno ću češće dolaziti ovamo. Svim maksimalne preporuke za pojesti nešto autentično.",
  },
  {
    name: "Marko Lukić",
    role: "Turist",
    letter: "A",
    text: "Pite ispod sača sa seckanom (mlevenom) junetinom i teletinom, najbolje koje sam jeo do sada. Probali smo Banjalučki ćevap koji je jako sočan, pun ukusa! Osoblje preljubazno. Svaka preporuka, vraticu se sigurno kada ponovo dodjem u Banjaluku.",
  },
  {
    name: "Mirjana",
    role: "Posjetilac",
    letter: "N",
    text: "Obavezno posjetiti kad se dodje u B.Luku. Pite su fenomenalne. Osoblje ljubazno. Ekipa iz Apatina",
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
