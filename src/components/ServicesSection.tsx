import { services } from "@/data/site";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="prestations" className="scroll-mt-24 bg-brand-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="badge">Nos prestations</span>
          <h2 className="section-title mt-3">Ce que nous savons faire</h2>
          <p className="mt-2 text-neutral-500">
            De la création sur mesure à la retouche minutieuse, chaque projet est traité avec la
            même exigence artisanale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
