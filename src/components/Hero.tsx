import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { atelier } from "@/data/site";

export default function Hero() {
  const phoneHref = `tel:${atelier.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-plum via-brand-dark to-brand-dark opacity-90" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-brand-plum/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 sm:py-28">
        <span className="badge-gold">Fait main • Sur mesure</span>
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
          {atelier.name}
        </h1>
        <p className="max-w-xl text-lg text-white/80">{atelier.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/services" className="btn-primary">
            Découvrir nos prestations
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={phoneHref} className="btn-secondary">
            <Phone className="h-4 w-4" />
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
