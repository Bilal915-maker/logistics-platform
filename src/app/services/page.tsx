import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Nos prestations — Couture & Broderie",
  description:
    "Couture sur mesure, retouches, broderie personnalisée, création textile, réparations et ateliers : découvrez toutes nos prestations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos prestations"
        title="Couture, broderie et retouches sur mesure"
        description="Chaque prestation est réalisée à l'atelier, avec des conseils personnalisés à chaque étape de votre projet."
      />
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
