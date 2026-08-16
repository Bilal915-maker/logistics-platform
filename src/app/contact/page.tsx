import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { atelier } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact — ${atelier.name}`,
  description: "Prenez rendez-vous ou demandez un devis pour votre projet de couture ou de broderie.",
};

export default function ContactPage() {
  const phoneHref = `tel:${atelier.phone.replace(/\s/g, "")}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une question, une envie, un devis ? Écrivez-nous ou passez nous voir à l'atelier."
      />
      <section className="bg-brand-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 md:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <h3 className="font-display text-lg font-bold text-brand-dark">Coordonnées</h3>
              <ul className="mt-4 space-y-4 text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-plum" />
                  {atelier.address}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-plum" />
                  <a href={phoneHref} className="hover:text-brand-plum">
                    {atelier.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-plum" />
                  <a href={`mailto:${atelier.email}`} className="hover:text-brand-plum">
                    {atelier.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <h3 className="font-display text-lg font-bold text-brand-dark">Horaires d&apos;ouverture</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                {atelier.hours.map((h) => (
                  <li key={h.jours} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-gold" />
                      {h.jours}
                    </span>
                    <span>{h.horaire}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
