"use client";

import Link from "next/link";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/menu";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total, count } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Panier"
      >
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
          <h2 className="font-display text-xl font-extrabold text-brand-dark">
            Votre panier{count > 0 && ` (${count})`}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Fermer le panier"
            className="rounded-full p-1 text-brand-dark/60 transition hover:bg-brand-cream hover:text-brand-dark"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-brand-dark/50">
              <ShoppingBag className="h-12 w-12" />
              <p className="font-display font-bold text-brand-dark">Votre panier est vide</p>
              <p className="text-sm">
                Ajoutez des produits depuis la carte pour commencer votre commande.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 border-b border-black/5 pb-4"
                >
                  <div className="flex-1">
                    <p className="font-display font-bold leading-tight text-brand-dark">
                      {item.name}
                    </p>
                    <p className="text-xs text-brand-dark/50">{item.tierLabel}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-full bg-brand-cream p-1 text-brand-dark transition hover:bg-brand-gold"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-full bg-brand-cream p-1 text-brand-dark transition hover:bg-brand-gold"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-display font-bold text-brand-red">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-brand-dark/40 transition hover:text-brand-red"
                      aria-label="Retirer du panier"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-black/5 px-5 py-4">
            <div className="mb-3 flex items-center justify-between font-display text-lg font-extrabold text-brand-dark">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Link href="/commande" onClick={closeCart} className="btn-primary w-full">
              Commander
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
