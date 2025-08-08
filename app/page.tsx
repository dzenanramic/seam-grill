import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seam pite ispod sača – Banja Luka</title>
        <meta
          name="description"
          content="Ukusna hrana, srdačna usluga. Posjetite nas u Banja Luci!"
        />
      </Head>

      <main className="min-h-screen bg-[#121212] text-[#E0E0E0]">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-[#121212] border-b border-gray-800">
          <div className="container flex items-center justify-end h-16 px-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="#">Početna</Link>
              <Link href="#">O nama</Link>
              <Link href="#">Meni</Link>
              <Link href="#">Kontakt</Link>
            </nav>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-4 text-sm">
                    <Link href="#">Početna</Link>
                    <Link href="#">O nama</Link>
                    <Link href="#">Meni</Link>
                    <Link href="#">Kontakt</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image
            src="/pite.jpg"
            alt="Seam Grill Front"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="container px-4 py-32 relative z-20">
            <div className="max-w-2xl  ">
              <h1 className="text-5xl font-bold mb-4 text-white">
                <span className="text-red-500">Seam</span> pite ispod sača
              </h1>
              <p className="text-xl mb-8 text-white">
                Najukusnije pite u Banja Luci
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#E11D48] hover:bg-[#BE123C] text-white">
                  Pogledaj meni
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-gray-900" />

        {/* Menu Highlights */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">Naša ponuda</h2>
              <p className="text-muted-foreground">
                Uživajte u našim specijalitetima pripremljenim sa pažnjom i
                ljubavlju prema tradicionalnoj kuhinji
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sač",
                  img: "/sac.jpg",
                  price: "7 KM",
                  desc: "Tradicionalni roštilj s domaćim somunom, lukom i kajmakom",
                },
                {
                  title: "Roštilj",
                  img: "/rostilj.jpg",
                  price: "9 KM",
                  desc: "Sočna marinirana piletina sa roštilja uz domaći pomfrit i salatu",
                },
                {
                  title: "Doner",
                  img: "/doner.jpg",
                  price: "8 KM",
                  desc: "Domaća pljeskavica od mješanog mesa sa kajmakom i lepinjom",
                },
              ].map((item) => (
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
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
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

        <Separator className="my-16" />

        {/* Testimonials */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">Šta kažu naši gosti</h2>
              <p className="text-muted-foreground">
                Naš ponos i radost su zadovoljni gosti koji se uvijek rado
                vraćaju
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marko Petrović",
                  role: "Redovan gost",
                  letter: "M",
                  text: "Najbolji ćevapi u gradu! Svaki put kad dođem u Banja Luku, obavezno posjetim Seam Grill. Usluga je brza i ljubazna, a hrana uvijek svježa i ukusna.",
                },
                {
                  name: "Ana Kovačević",
                  role: "Turist",
                  letter: "A",
                  text: "Preporučujem pljeskavicu sa kajmakom - jednostavno savršena kombinacija! Atmosfera je opuštena, a cijene pristupačne. Definitivno vrijedi posjetiti.",
                },
                {
                  name: "Nikola Jovanović",
                  role: "Posjetilac",
                  letter: "N",
                  text: "Odlična domaća hrana sa tradicionalnim ukusima. Posebno mi se sviđa što koriste domaće sastojke. Piletina sa roštilja je moj favorit!",
                },
              ].map((t) => (
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
                        <p className="text-sm text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Footer */}
        <footer className="py-10 border-t">
          <div className="container px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  S
                </div>
                <h2 className="text-xl font-bold">
                  Pite ispod sača SEAM - Banja Luka
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Najbolji roštilj u Banja Luci. Posjetite nas i uvjerite se u
                kvalitet!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Radno vrijeme</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Ponedjeljak - Nedjelja: 06:00 - 22:00</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <p className="text-sm text-muted-foreground">
                Kralja Petra I Karađorđevića 32, Banja Luka
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                +387 65 185 575
              </p>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Seam Grill. Sva prava zadržana.
          </div>
        </footer>
      </main>
    </>
  );
}
