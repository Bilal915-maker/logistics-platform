import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryFilterGrid from "@/components/GalleryFilterGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Galerie — Nos créations en couture & broderie",
  description:
    "Découvrez nos réalisations : robes sur mesure, broderies personnalisées, retouches et créations textiles.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        eyebrow="Galerie"
        title="Nos réalisations"
        description="Un aperçu de nos créations en couture, broderie et décoration textile, réalisées pour nos clients."
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <GalleryFilterGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
