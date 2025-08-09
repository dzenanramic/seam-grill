import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const menu = {
  doneri: [
    { name: "JUNEĆI DONER (velika)", price_km: 9.0 },
    { name: "JUNEĆI DONER (mala)", price_km: 7.0 },
    { name: "PILEĆI DONER (velika)", price_km: 9.0 },
    { name: "PILEĆI DONER (mala)", price_km: 7.0 },
    { name: "MIX DONER (velika)", price_km: 9.0 },
    { name: "MIX DONER (mala)", price_km: 7.0 },
  ],
  salate: [
    { name: "ŠOPSKA SALATA", price_km: 5.0 },
    { name: "SALATA MIJEŠANA", price_km: 5.0 },
    { name: "SALATA krastavac-paradajz", price_km: 4.0 },
  ],
  pića: [
    { name: "VODA", price_km: 2.0 },
    { name: "TANGERINA", price_km: 3.0 },
    { name: "KISELA OLIMPIJA", price_km: 2.0 },
    { name: "KISELA VODA 0,5l", price_km: 2.0 },
    { name: "CAPPY FLAŠICA", price_km: 3.0 },
    { name: "LEDENI ČAJ", price_km: 3.0 },
    { name: "FANTA KONZERVA", price_km: 3.0 },
    { name: "FANTA 0,5l", price_km: 3.0 },
    { name: "COCA COLA KONZERVA", price_km: 3.0 },
    { name: "COCA COLA 0,5l", price_km: 3.0 },
    { name: "AIRAN ČAŠA", price_km: 1.2 },
    { name: "AIRAN 0,5l", price_km: 2.5 },
    { name: "KEFIR ČAŠA", price_km: 1.2 },
    { name: "KEFIR 0,5l", price_km: 2.5 },
    { name: "JOGURT ČAŠA", price_km: 1.2 },
    { name: "JOGURT 0,5l", price_km: 2.5 },
    { name: "JOGURT 1l", price_km: 4.0 },
  ],
  roštilj: [
    { name: "BANJALUČKI ĆEVAP (velika)", price_km: 9.0 },
    { name: "BANJALUČKI ĆEVAP (srednja)", price_km: 7.0 },
    { name: "BANJALUČKI ĆEVAP (mala)", price_km: 5.0 },
    { name: "BATAK BEZ KOSTI", price_km: 7.0 },
    { name: "PILEĆI FILE", price_km: 7.0 },
    { name: "KOBASICE", price_km: 7.0 },
    { name: "KRMENADLA", price_km: 8.0 },
    { name: "SARAJEVSKI ĆEVAP (10kom.)", price_km: 10.0 },
    { name: "SARAJEVSKI ĆEVAP (5kom.)", price_km: 5.0 },
    { name: "CHEESEBURGER", price_km: 7.0 },
    { name: "HAMBURGER", price_km: 6.0 },
    { name: "POMFRIT", price_km: 3.5 },
  ],
  sač: [
    { name: "BUREK 1kg", price_km: 18.0 },
    { name: "SIRNICA 1kg", price_km: 14.0 },
    { name: "ZELJANICA 1kg", price_km: 14.0 },
    { name: "KROMPIRUŠA 1kg", price_km: 14.0 },
    { name: "SJECANI BUREK (komad)", price_km: 8.0 },
    { name: "PITE OD TIKVICA (komad)", price_km: 4.0 },
    { name: "PITA OD GLJIVA (komad)", price_km: 4.0 },
    { name: "ZELJANICA (komad)", price_km: 4.0 },
  ],
};

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; price_km: number }[];
}) {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl text-red-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between border-b border-gray-700 pb-2 last:border-none"
            >
              <span className="text-gray-200">{item.name}</span>
              <span className="text-gray-400">
                {item.price_km.toFixed(2)} KM
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function MenuPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Jelovnik
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <MenuSection title="Roštilj" items={menu.roštilj} />
        <MenuSection title="Sač" items={menu.sač} />
        <MenuSection title="Doneri" items={menu.doneri} />
        <MenuSection title="Salate" items={menu.salate} />
        <MenuSection title="Pića" items={menu.pića} />
      </div>

      <Separator className="my-10 bg-gray-800" />

      <p className="text-center text-sm text-gray-500">
        Cijene su izražene u konvertibilnim markama (KM).
      </p>
    </div>
  );
}
