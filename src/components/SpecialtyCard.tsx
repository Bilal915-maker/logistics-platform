import { MenuItem, formatPrice } from "@/data/menu";
import MenuImage from "./MenuImage";

interface SpecialtyCardProps {
  item: MenuItem;
}

export default function SpecialtyCard({ item }: SpecialtyCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
      <MenuImage slug={item.slug} emoji="✨" alt={item.name} className="h-44 w-full" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="badge-gold w-fit">Signature</span>
        <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
        {item.description && <p className="text-sm text-white/60">{item.description}</p>}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.prices.map((p) => (
            <span
              key={p.label}
              className="rounded-full bg-brand-gold/15 px-3 py-1 text-sm font-semibold text-brand-gold ring-1 ring-brand-gold/30"
            >
              <span className="mr-1 opacity-70">{p.label}</span>
              {formatPrice(p.price)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
