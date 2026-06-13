import { MenuItem, formatPrice } from "@/data/menu";
import MenuImage from "./MenuImage";

interface MenuCardProps {
  item: MenuItem;
  emoji: string;
}

export default function MenuCard({ item, emoji }: MenuCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <MenuImage slug={item.slug} emoji={emoji} alt={item.name} className="h-40 w-full" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-tight text-brand-dark">
            {item.name}
          </h3>
          {item.badge === "nouveau" && <span className="badge shrink-0">Nouveau</span>}
          {item.badge === "signature" && <span className="badge-gold shrink-0">Signature</span>}
        </div>
        {item.description && <p className="text-sm text-neutral-500">{item.description}</p>}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.prices.map((p) => (
            <span key={p.label} className="price-chip">
              <span className="mr-1 text-brand-dark/50">{p.label}</span>
              {formatPrice(p.price)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
