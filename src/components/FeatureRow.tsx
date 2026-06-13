import { ChefHat, Leaf, Clock3, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Fait maison",
    desc: "Recettes préparées sur place, chaque jour, par notre équipe.",
  },
  {
    icon: Leaf,
    title: "Produits frais",
    desc: "Viandes, légumes et pains sélectionnés avec soin.",
  },
  {
    icon: Clock3,
    title: "Service rapide",
    desc: "Votre commande prête en quelques minutes, sur place ou à emporter.",
  },
  {
    icon: ThumbsUp,
    title: "Qualité garantie",
    desc: "Le goût et la fraîcheur, à chaque bouchée.",
  },
];

export default function FeatureRow() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
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
