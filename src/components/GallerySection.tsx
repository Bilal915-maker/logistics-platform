import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/site";
import GalleryCard from "./GalleryCard";

export default function GallerySection() {
  const featured = galleryItems.slice(0, 6);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="badge">Portfolio</span>
            <h2 className="section-title mt-3">Nos dernières créations</h2>
            <p className="mt-2 text-neutral-500">
              Un aperçu de nos réalisations en couture et en broderie, pièce après pièce.
            </p>
          </div>
          <Link
            href="/galerie"
            className="inline-flex items-center gap-1 font-semibold text-brand-plum hover:underline"
          >
            Voir toute la galerie
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <GalleryCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
