"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, MessageCircle, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, restaurant } from "@/data/menu";

type OrderMode = "emporter" | "surplace";

export default function CommandePage() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const [mode, setMode] = useState<OrderMode>("emporter");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    const lines = items.map(
      (i) => `• ${i.quantity}x ${i.name} (${i.tierLabel}) — ${formatPrice(i.price * i.quantity)}`
    );
    const header = `Bonjour ${restaurant.name}, voici ma commande${
      name ? ` (${name})` : ""
    } — ${mode === "emporter" ? "à emporter" : "sur place"} :`;
    const message = [header, "", ...lines, "", `Total : ${formatPrice(total)}`].join("\n");
    const waHref = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(waHref, "_blank");
    clearCart();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
        <CheckCircle2 className="h-16 w-16 text-green-600" />
        <h1 className="font-display text-2xl font-extrabold text-brand-dark">
          Commande envoyée !
        </h1>
        <p className="text-brand-dark/60">
          Votre commande a été ouverte dans WhatsApp. Confirmez l&apos;envoi du message pour que
          notre équipe la reçoive et commence à la préparer.
        </p>
        <Link href="/menu" className="btn-primary">
          Retour à la carte
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
        <ShoppingBag className="h-16 w-16 text-brand-dark/20" />
        <h1 className="font-display text-2xl font-extrabold text-brand-dark">
          Votre panier est vide
        </h1>
        <p className="text-brand-dark/60">
          Ajoutez des produits depuis notre carte pour commencer une commande.
        </p>
        <Link href="/menu" className="btn-primary">
          Voir la carte
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
        Finaliser ma commande
      </h1>
      <p className="mt-2 text-brand-dark/60">
        Vérifiez votre commande, choisissez un mode de retrait, puis envoyez-la directement à{" "}
        {restaurant.name} sur WhatsApp.
      </p>

      <ul className="mt-8 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5"
          >
            <div className="flex-1">
              <p className="font-display font-bold text-brand-dark">{item.name}</p>
              <p className="text-xs text-brand-dark/50">
                {item.tierLabel} · {formatPrice(item.price)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="rounded-full bg-brand-cream p-1.5 transition hover:bg-brand-gold"
                aria-label="Diminuer la quantité"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 text-center font-bold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="rounded-full bg-brand-cream p-1.5 transition hover:bg-brand-gold"
                aria-label="Augmenter la quantité"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <span className="w-20 text-right font-display font-bold text-brand-red">
              {formatPrice(item.price * item.quantity)}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-brand-dark/40 transition hover:text-brand-red"
              aria-label="Retirer du panier"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-brand-dark px-5 py-4 font-display text-xl font-extrabold text-white">
        <span>Total</span>
        <span className="text-brand-gold">{formatPrice(total)}</span>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-bold text-brand-dark">Mode de retrait</h2>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={() => setMode("emporter")}
            className={`flex-1 rounded-xl px-4 py-3 font-display font-bold transition ${
              mode === "emporter"
                ? "bg-brand-red text-white"
                : "bg-white text-brand-dark ring-1 ring-black/10"
            }`}
          >
            À emporter
          </button>
          <button
            type="button"
            onClick={() => setMode("surplace")}
            className={`flex-1 rounded-xl px-4 py-3 font-display font-bold transition ${
              mode === "surplace"
                ? "bg-brand-red text-white"
                : "bg-white text-brand-dark ring-1 ring-black/10"
            }`}
          >
            Sur place
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="name" className="font-display text-lg font-bold text-brand-dark">
          Votre prénom <span className="text-sm font-normal text-brand-dark/40">(optionnel)</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex : Karim"
          className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 focus:border-brand-red focus:outline-none"
        />
      </div>

      <button onClick={handleSend} className="btn-primary mt-8 w-full text-base">
        <MessageCircle className="h-5 w-5" />
        Envoyer la commande sur WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-brand-dark/40">
        Vous serez redirigé vers WhatsApp pour confirmer l&apos;envoi à {restaurant.name}.
      </p>
    </div>
  );
}
