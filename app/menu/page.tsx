import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const menu = [
  {
    item: "Burek",
    quantity: "1kg",
    price: "18 KM",
  },
  {
    item: "Sirnica",
    quantity: "1kg",
    price: "14 KM",
  },
  {
    item: "Zeljanica",
    quantity: "1kg",
    price: "14 KM",
  },
  {
    item: "Krompiruša",
    quantity: "1kg",
    price: "14 KM",
  },
  {
    item: "Sjeckani Burek",
    quantity: "komad",
    price: "8 KM",
  },
  {
    item: "Pita sa gljivama",
    quantity: "komad",
    price: "4 KM",
  },
  {
    item: "Pita sa tikvama",
    quantity: "komad",
    price: "4 KM",
  },
  {
    item: "Jogurt",
    quantity: "1 lit.",
    price: "3.5 KM",
  },
  {
    item: "Jogurt",
    quantity: "0.5 lit.",
    price: "2.5 KM",
  },
  {
    item: "Jogurt Balans",
    quantity: "1 lit.",
    price: "4 KM",
  },
  {
    item: "Jogurt",
    quantity: "čaša",
    price: "1.2 KM",
  },
  {
    item: "Razni sokovi",
    price: "3 KM",
  },
  {
    item: "Voda",
    price: "2 KM",
  },
];

function MenuList() {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl text-[#FBBF24]  text-center">
          Jelovnik
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {menu.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col md:flex-row md:justify-between border-b border-gray-700 pb-2 last:border-none"
            >
              <span className="text-gray-200 font-medium">
                {item.item}
                {item.quantity ? (
                  <span className="text-gray-400 font-normal">{` (${item.quantity})`}</span>
                ) : null}
              </span>
              <span className="text-gray-400 mt-1 md:mt-0">{item.price}</span>
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
      <p className="text-center text-sm text-gray-500">
        Cijene su izražene u konvertibilnim markama (KM).
      </p>
    </div>
  );
}
