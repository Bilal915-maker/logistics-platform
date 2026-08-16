"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { atelier, services } from "@/data/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `Demande de devis — ${service || "Renseignement"}`;
    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      `Prestation : ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${atelier.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
          Nom complet
          <input
            required
            name="name"
            type="text"
            placeholder="Votre nom"
            className="rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none transition focus:border-brand-plum"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
          Email
          <input
            required
            name="email"
            type="email"
            placeholder="vous@email.fr"
            className="rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none transition focus:border-brand-plum"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
          Téléphone
          <input
            name="phone"
            type="tel"
            placeholder="06 12 34 56 78"
            className="rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none transition focus:border-brand-plum"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
          Prestation souhaitée
          <select
            name="service"
            defaultValue=""
            className="rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none transition focus:border-brand-plum"
          >
            <option value="" disabled>
              Sélectionnez une prestation
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Autre">Autre demande</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
        Message
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Décrivez votre projet en quelques mots..."
          className="rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none transition focus:border-brand-plum"
        />
      </label>

      <button type="submit" className="btn-primary self-start">
        Envoyer le message
        <Send className="h-4 w-4" />
      </button>

      {sent && (
        <p className="text-sm text-brand-plum">
          Votre messagerie va s&apos;ouvrir pour finaliser l&apos;envoi. À très vite !
        </p>
      )}
    </form>
  );
}
