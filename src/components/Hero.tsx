import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { restaurant } from "@/data/menu";

export default function Hero() {
  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-dark to-brand-dark opacity-90" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-brand-red/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 sm:py-28">
        <span className="badge-gold">Fait maison • Produits frais</span>
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
          {restaurant.name}
        </h1>
        <p className="max-w-xl text-lg text-white/80">
          {restaurant.tagline}. Kebabs, burgers, paninis, naan burger et nos spécialités
          signature — à savourer sur place ou à emporter.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/menu" className="btn-primary">
            Voir la carte
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={phoneHref} className="btn-secondary">
            <Phone className="h-4 w-4" />
            Commander par téléphone
          </a>
        </div>
      </div>
    </section>
  );
}
