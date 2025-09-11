import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
