"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { MenuItem, formatPrice, getPrimaryPrice } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import MenuImage from "./MenuImage";

interface MenuCardProps {
  item: MenuItem;
  emoji: string;
}

export default function MenuCard({ item, emoji }: MenuCardProps) {
  const { addItem } = useCart();
  const [selected, setSelected] = useState(getPrimaryPrice(item));
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(item, selected);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <MenuImage slug={item.slug} emoji={emoji} alt={item.name} className="h-40 w-full" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-tight text-brand-dark">
            {item.name}
          </h3>
          {item.badge === "nouveau" && <span className="badge shrink-0">Nouveau</span>}
          {item.badge === "signature" && <span className="badge-gold shrink-0">Signature</span>}
        </div>
        {item.description && <p className="text-sm text-neutral-500">{item.description}</p>}

        {item.prices.length > 1 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.prices.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setSelected(p)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                  selected.label === p.label
                    ? "bg-brand-red text-white"
                    : "bg-brand-cream text-brand-dark/60 ring-1 ring-brand-dark/10 hover:text-brand-dark"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="font-display text-2xl font-extrabold text-brand-red">
            {formatPrice(selected.price)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-display font-bold text-white shadow-card transition ${
              added ? "bg-green-600" : "bg-brand-red hover:bg-brand-red-dark"
            }`}
          >
            {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {added ? "Ajouté" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
}
