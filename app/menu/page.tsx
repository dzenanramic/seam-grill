import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jelovnik",
  description:
    "Pogledajte jelovnik restorana Pite pod sačem u Banja Luci. Burek, sirnica, zeljanica i još mnogo toga!",
  openGraph: {
    title: "Jelovnik | Pite pod sačem Sač",
    description:
      "Pogledajte jelovnik restorana Pite pod sačem u Banja Luci. Burek, sirnica, zeljanica i još mnogo toga!",
    url: "https://yourdomain.com/menu",
    images: [
      {
        url: "/menu.jpg",
        width: 1200,
        height: 630,
        alt: "Jelovnik restorana Pite pod sačem Sač Banja Luka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelovnik | Pite pod sačem Sač",
    description:
      "Pogledajte jelovnik restorana Pite pod sačem u Banja Luci. Burek, sirnica, zeljanica i još mnogo toga!",
    images: ["/menu.jpg"],
  },
};
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const menu = [
  {
    item: "Burek",
    en: "Burek (meat pie)",
    quantity: "1kg",
    price: "18 KM",
  },
  {
    item: "Sirnica",
    en: "Cheese pie",
    quantity: "1kg",
    price: "14 KM",
  },
  {
    item: "Zeljanica",
    en: "Spinach pie",
    quantity: "1kg",
    price: "14 KM",
  },
  {
    item: "Krompiruša",
    en: "Potato pie",
    quantity: "1kg",
    price: "14 KM",
  },
  {
    item: "Sjeckani Burek",
    en: "Burek with chopped meat",
    quantity: "komad",
    enQuantity: "piece",
    price: "8 KM",
  },
  {
    item: "Pita sa gljivama",
    en: "Mushroom pie",
    quantity: "komad",
    enQuantity: "piece",
    price: "4 KM",
  },
  {
    item: "Pita sa tikvama",
    en: "Pumpkin pie",
    quantity: "komad",
    enQuantity: "piece",
    price: "4 KM",
  },
  {
    item: "Jogurt",
    en: "Yogurt",
    quantity: "1 lit.",
    enQuantity: "1 L",
    price: "3.5 KM",
  },
  {
    item: "Jogurt",
    en: "Yogurt",
    quantity: "0.5 lit.",
    enQuantity: "0.5 L",
    price: "2.5 KM",
  },
  {
    item: "Jogurt Balans",
    en: "Yogurt (Balans)",
    quantity: "1 lit.",
    enQuantity: "1 L",
    price: "4 KM",
  },
  {
    item: "Jogurt",
    en: "Yogurt",
    quantity: "čaša",
    enQuantity: "glass",
    price: "1.2 KM",
  },
  {
    item: "Razni sokovi",
    en: "Various juices",
    price: "3 KM",
  },
  {
    item: "Voda",
    en: "Water",
    price: "2 KM",
  },
];

function MenuList() {
  return (
    <Card className="bg-[#FBBF24]  border-gray-950 border-2">
      <CardHeader>
        <div>
          <CardTitle className="text-3xl text-[#c90404]  text-center">
            Jelovnik
          </CardTitle>
          <div className="text-center text-sm text-[#c90404] mt-1">Menu</div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {menu.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col md:flex-row md:justify-between border-b-2 border-gray-950  pb-2 last:border-none"
            >
              <div className="flex flex-col">
                <span className="text-[#c90404] text-xl font-medium">
                  {item.item}
                  {item.quantity ? (
                    <span className="text-[#c90404] font-normal">{` (${item.quantity})`}</span>
                  ) : null}
                </span>
                {item.en ? (
                  <span className="text-[#c90404] text-sm mt-1">
                    {item.en}
                    {item.enQuantity ? (
                      <span className="font-normal">{` (${item.enQuantity})`}</span>
                    ) : null}
                  </span>
                ) : null}
              </div>
              <span className="text-[#c90404] mt-1 md:mt-0">{item.price}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function MenuPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <MenuList />
      <Separator className="my-10 bg-gray-800" />
      <p className="text-center text-lg text-[#c90404]">
        Cijene su izražene u konvertibilnim markama (KM).
        <span className="block text-sm mt-1">
          Prices are shown in Convertible Marks (KM).
        </span>
      </p>
    </div>
  );
}
