import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-dark py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="badge-gold">Avis clients</span>
          <h2 className="section-title mt-3 text-white">Ce qu&apos;ils en disent</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
            >
              <Quote className="h-6 w-6 text-brand-gold" />
              <p className="text-sm text-white/80">{t.quote}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <div>
                  <p className="font-display font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
