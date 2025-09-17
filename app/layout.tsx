import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pite pod sačem Sač – Banja Luka",
    template: "%s | Pite pod sačem Sač",
  },
  description:
    "Uživajte u autentičnoj balkanskoj hrani u Banja Luci. Pogledajte naš jelovnik, saznajte više o nama i kontaktirajte nas!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pite pod sačem Sač – Banja Luka",
    description:
      "Uživajte u autentičnoj balkanskoj hrani u Banja Luci. Pogledajte naš jelovnik, saznajte više o nama i kontaktirajte nas!",
    url: "https://yourdomain.com/",
    siteName: "Pite pod sačem Sač",
    images: [
      {
        url: "/burek.jpg",
        width: 1200,
        height: 630,
        alt: "Burek iz ponude Pite pod sačem Sač Banja Luka",
      },
    ],
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pite pod sačem – Banja Luka | Pite pod sačem Sač",
    description:
      "Uživajte u autentičnoj balkanskoj hrani u Banja Luci. Pogledajte naš jelovnik, saznajte više o nama i kontaktirajte nas!",
    images: ["/burek.jpg"],
  },
  metadataBase: new URL("https://www.sac-pite-pod-sacem.shop/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sač pite pod sačem",
    url: "https://www.sac-pite-pod-sacem.shop/",
    logo: "https://www.sac-pite-pod-sacem.shop/favicon.ico",
    image: ["https://www.sac-pite-pod-sacem.shop/pite.jpg"],
    description:
      "Tradicionalne domaće pite i specijaliteti sa sača. Dostava i lokalna usluga.",
    address: {
      "@type": "PostalAddress",
      streetAddress: " Patrijarha Makarija Sokolovića 4",
      addressLocality: "Banja Luka",
      addressCountry: "BA",
    },
    telephone: "+387-66-706-148",
    priceRange: "2-5 €",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <html lang="hr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Sač pite pod sačem — Pite, burek i domaće specijalitete</title>
        <meta
          name="description"
          content="Tradicionalne pite, sirnica, zeljanica i burek pečeni pod sačem. Narudžbe, dostava i catering."
        />
        <link rel="canonical" href="https://www.sac-pite-pod-sacem.shop/" />

        {/* Open Graph */}
        <meta property="og:type" content="restaurant" />
        <meta property="og:site_name" content="Sač pite pod sačem" />
        <meta
          property="og:title"
          content="Sač pite pod sačem — Pite i domaće specijalitete"
        />
        <meta
          property="og:description"
          content="Tradicionalne pite, sirnica, zeljanica i burek pečeni pod sačem. Narudžbe, dostava i catering."
        />
        <meta
          property="og:url"
          content="https://www.sac-pite-pod-sacem.shop/"
        />
        <meta
          property="og:image"
          content="https://www.sac-pite-pod-sacem.shop/pite.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sač pite pod sačem — Pite i domaće specijalitete"
        />
        <meta
          name="twitter:description"
          content="Tradicionalne pite, sirnica, zeljanica i burek pečeni pod sačem."
        />
        <meta
          name="twitter:image"
          content="https://www.sac-pite-pod-sacem.shop/pite.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
