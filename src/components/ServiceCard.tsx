import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-plum/10 text-brand-plum">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="font-display text-xl font-bold text-brand-dark">{service.title}</h3>
      <p className="text-sm text-neutral-500">{service.description}</p>

      {detailed && (
        <ul className="mt-2 space-y-1.5 text-sm text-neutral-600">
          {service.details.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
              {d}
            </li>
          ))}
        </ul>
      )}

      {!detailed && (
        <Link
          href="/services"
          className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-brand-plum hover:underline"
        >
          En savoir plus
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
