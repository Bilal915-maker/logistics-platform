"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { restaurant } from "@/data/menu";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Notre Carte" },
  { href: "/#specialites", label: "Spécialités" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();
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

        <div className="flex items-center gap-3">
          <a href={phoneHref} className="btn-primary hidden md:inline-flex">
            <Phone className="h-4 w-4" />
            {restaurant.phone}
          </a>

          <button
            onClick={openCart}
            className="relative rounded-full bg-brand-dark/5 p-2.5 text-brand-dark transition hover:bg-brand-gold"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag className="h-6 w-6" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brand-red px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-brand-dark md:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
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
