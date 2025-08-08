"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react"; // Import useState

export default function Header() {
  // State to control sheet visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#121212] border-b border-gray-800">
      <div className="container flex items-center justify-end h-16 px-4">
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-white hover:text-gray-300">
            Početna
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            O nama
          </Link>
          <Link href="/menu" className="text-white hover:text-gray-300">
            Meni
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Kontakt
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Controlled Sheet with open state */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white"
              >
                <Menu className="w-5 h-5 stroke-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#121212] text-white border-l border-gray-800"
            >
              <DialogTitle>
                <p className="p-4 font-bold text-lg">Navigacija</p>
              </DialogTitle>
              <nav className="flex flex-col gap-4 mt-4 text-sm px-4">
                {/* Add onClick handler to close sheet */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  Početna
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  O nama
                </Link>
                <Link
                  href="/menu"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  Meni
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
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
