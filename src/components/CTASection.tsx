import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { atelier } from "@/data/site";

export default function CTASection() {
  const phoneHref = `tel:${atelier.phone.replace(/\s/g, "")}`;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-brand-plum to-brand-plum-dark px-6 py-12 text-center text-white shadow-card sm:px-12">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Un projet en tête ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Parlons-en ensemble. Prenez rendez-vous à l&apos;atelier ou contactez-nous pour un devis
          personnalisé, sans engagement.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-secondary">
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={phoneHref} className="btn-primary bg-brand-gold text-brand-dark hover:bg-brand-gold/90">
            <Phone className="h-4 w-4" />
            {atelier.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
