import type { GalleryItem } from "@/data/site";
import GalleryImage from "./GalleryImage";

export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <GalleryImage slug={item.slug} emoji={item.emoji} alt={item.title} className="h-56 w-full" />
      <div className="flex flex-col gap-1 p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
          {item.category}
        </span>
        <h3 className="font-display text-lg font-bold text-brand-dark">{item.title}</h3>
      </div>
    </div>
  );
}
