import { MenuCategory } from "@/data/menu";
import MenuCard from "./MenuCard";

interface MenuSectionProps {
  category: MenuCategory;
  tone?: "cream" | "white";
}

export default function MenuSection({ category, tone = "cream" }: MenuSectionProps) {
  return (
    <section
      id={category.id}
      className={`scroll-mt-32 py-12 ${tone === "white" ? "bg-white" : "bg-brand-cream"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-start gap-3">
          <span className="text-3xl">{category.emoji}</span>
          <div>
            <h2 className="section-title">{category.title}</h2>
            {category.subtitle && (
              <p className="mt-1 text-sm text-neutral-500">{category.subtitle}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {category.items.map((item) => (
            <MenuCard key={item.slug} item={item} emoji={category.emoji} />
          ))}
        </div>
      </div>
    </section>
  );
}
