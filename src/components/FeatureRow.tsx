import { Hand, Gem, Clock3, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "Fait main",
    desc: "Chaque pièce est façonnée avec soin dans notre atelier, du croquis à la finition.",
  },
  {
    icon: Gem,
    title: "Matières de qualité",
    desc: "Tissus, fils et fournitures sélectionnés avec exigence pour un rendu durable.",
  },
  {
    icon: Clock3,
    title: "Délais respectés",
    desc: "Un planning clair annoncé dès le premier rendez-vous, jusqu'à la livraison.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    desc: "Essayages et ajustements jusqu'à obtenir la coupe et le rendu qui vous ressemblent.",
  },
];

export default function FeatureRow() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-plum/10 text-brand-plum">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-brand-dark">{title}</h3>
            <p className="text-sm text-neutral-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
