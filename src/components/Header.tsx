"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/data/menu";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Notre Carte" },
  { href: "/#specialites", label: "Spécialités" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-2xl font-extrabold text-brand-red">
          {restaurant.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-brand-dark transition hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a href={phoneHref} className="btn-primary hidden md:inline-flex">
          <Phone className="h-4 w-4" />
          {restaurant.phone}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-brand-dark md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-brand-cream px-4 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 font-medium text-brand-dark hover:bg-white"
            >
              {link.label}
            </Link>
          ))}
          <a href={phoneHref} className="btn-primary mt-2 justify-center">
            <Phone className="h-4 w-4" />
            {restaurant.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
