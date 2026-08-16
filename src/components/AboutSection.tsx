import { Award, Heart, Scissors } from "lucide-react";
import { atelier } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="a-propos" className="scroll-mt-24 bg-brand-cream py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-plum/10 via-brand-gold/20 to-brand-plum/10 shadow-card ring-1 ring-black/5 md:order-1">
          <Scissors className="h-20 w-20 text-brand-plum/40" />
        </div>
        <div className="order-1 md:order-2">
          <span className="badge">Notre histoire</span>
          <h2 className="section-title mt-3">Bienvenue chez {atelier.name}</h2>
          <p className="mt-4 text-neutral-600">{atelier.description}</p>
          <p className="mt-3 text-neutral-600">
            Installé au cœur du quartier, notre atelier accueille particuliers et professionnels
            pour des créations sur mesure, des retouches soignées et des broderies personnalisées.
            Chaque projet est pensé avec vous, du choix des matières jusqu&apos;à la dernière finition.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
              <div>
                <p className="font-display font-bold text-brand-dark">Savoir-faire artisanal</p>
                <p className="text-sm text-neutral-500">Des années d&apos;expérience en couture et broderie.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
              <div>
                <p className="font-display font-bold text-brand-dark">Passion du détail</p>
                <p className="text-sm text-neutral-500">Chaque pièce est soignée jusqu&apos;à la dernière couture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
