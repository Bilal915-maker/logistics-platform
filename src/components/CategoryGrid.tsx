import Link from "next/link";
import { menu } from "@/data/menu";

export default function CategoryGrid() {
  return (
    <section className="bg-brand-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title mb-8 text-center">Découvrez notre carte</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {menu.map((category) => (
            <Link
              key={category.id}
              href={`/menu#${category.id}`}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-4xl">{category.emoji}</span>
              <span className="font-display font-bold text-brand-dark">{category.title}</span>
              <span className="text-xs text-neutral-400">{category.items.length} produits</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
