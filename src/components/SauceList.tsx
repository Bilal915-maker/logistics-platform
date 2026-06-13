import { sauces } from "@/data/menu";

export default function SauceList() {
  return (
    <section id="sauces" className="scroll-mt-32 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-start gap-3">
          <span className="text-3xl">🧂</span>
          <div>
            <h2 className="section-title">Nos Sauces</h2>
            <p className="mt-1 text-sm text-neutral-500">Offertes avec votre plat, au choix</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {sauces.map((sauce) => (
            <span
              key={sauce}
              className="rounded-full bg-brand-cream px-4 py-2 text-sm font-semibold text-brand-dark ring-1 ring-black/5"
            >
              {sauce}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
