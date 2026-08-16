export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-plum via-brand-dark to-brand-dark opacity-90" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <span className="badge-gold">{eyebrow}</span>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-white/80">{description}</p>}
      </div>
    </section>
  );
}
