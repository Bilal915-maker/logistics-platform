"use client";

import { useState } from "react";
import { galleryCategories, galleryItems } from "@/data/site";
import GalleryCard from "./GalleryCard";

export default function GalleryFilterGrid() {
  const [active, setActive] = useState<string>("Toutes");

  const filtered =
    active === "Toutes" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === cat
                ? "bg-brand-plum text-white"
                : "bg-white text-brand-dark ring-1 ring-black/10 hover:bg-brand-cream"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <GalleryCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
