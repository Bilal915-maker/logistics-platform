import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { atelier } from "@/data/site";

export const metadata: Metadata = {
  title: `À propos — ${atelier.name}`,
  description: atelier.description,
};

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Notre atelier, notre passion"
        description="Un savoir-faire artisanal transmis avec exigence, pour des créations qui vous ressemblent."
      />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
