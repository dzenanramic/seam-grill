"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react"; // Import useState

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#FBBF24] md:border-b md:border-sidebar-border">
      <div className="container flex items-center justify-end h-16 px-4">
        <nav className="hidden md:flex items-center gap-6 text-m font-medium">
          <Link href="/" className="text-[#c90404] hover:text-brown">
            Početna
          </Link>
          <Link href="/about" className="text-[#c90404] hover:text-brown">
            O nama
          </Link>
          <Link href="/menu" className="text-[#c90404] hover:text-brown">
            Meni
          </Link>
          <Link href="/contact" className="text-[#c90404] hover:text-brown">
            Kontakt
          </Link>
        </nav>
        <div className="md:hidden flex items-center w-full justify-between">
          <Link href="/" className="flex-shrink-0">
            <span
              className="font-extrabold text-3xl tracking-widest"
              style={{ color: "#c90404", fontFamily: "inherit" }}
            >
              SAČ
            </span>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#c90404] hover:text-brown"
              >
                <Menu className="w-5 h-5 stroke-[#c90404]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-yellow text-[#c90404] border-l border-sidebar-border !bg-yellow !bg-opacity-100"
              style={{ backgroundColor: "#fde047" }} // fallback solid yellow
            >
              <DialogTitle>
                <p className="p-4 font-bold text-2xl">Navigacija</p>
              </DialogTitle>
              <nav className="flex flex-col gap-4 mt-4 text-xl px-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brown"
                >
                  Početna
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brown"
                >
                  O nama
                </Link>
                <Link
                  href="/menu"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brown"
                >
                  Meni
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brown"
                >
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
