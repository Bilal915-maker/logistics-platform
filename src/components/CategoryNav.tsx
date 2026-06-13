import { menu } from "@/data/menu";

export default function CategoryNav() {
  return (
    <div className="sticky top-[57px] z-40 border-b border-black/5 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        {menu.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-dark ring-1 ring-black/5 transition hover:bg-brand-red hover:text-white"
          >
            <span>{category.emoji}</span>
            {category.title}
          </a>
        ))}
        <a
          href="#sauces"
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-dark ring-1 ring-black/5 transition hover:bg-brand-red hover:text-white"
        >
          <span>🧂</span>
          Sauces
        </a>
      </div>
    </div>
  );
}
