import { MenuItem, premiumSlugs, findItemBySlug } from "@/data/menu";
import SpecialtyCard from "./SpecialtyCard";

export default function SpecialtiesSection() {
  const items = premiumSlugs
    .map((slug) => findItemBySlug(slug))
    .filter((item): item is MenuItem => Boolean(item));

  return (
    <section id="specialites" className="scroll-mt-24 bg-brand-dark py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="badge-gold">Édition Premium</span>
          <h2 className="section-title mt-3 text-white">Nos Spécialités Signature</h2>
          <p className="mt-2 text-white/60">
            Les recettes les plus généreuses de la maison, à découvrir en priorité.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <SpecialtyCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
