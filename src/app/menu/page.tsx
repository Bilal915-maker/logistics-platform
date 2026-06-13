import type { Metadata } from "next";
import CategoryNav from "@/components/CategoryNav";
import MenuSection from "@/components/MenuSection";
import SauceList from "@/components/SauceList";
import { menu, restaurant } from "@/data/menu";

export const metadata: Metadata = {
  title: `Notre Carte — ${restaurant.name}`,
  description: "Toute la carte : sandwichs, libanais, paninis, burgers, naan burger, crousty bowls, assiettes, tex mex, desserts et boissons.",
};

export default function MenuPage() {
  return (
    <>
      <div className="bg-brand-dark py-12 text-center text-white">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Notre Carte</h1>
        <p className="mx-auto mt-2 max-w-xl text-white/60">
          Tous nos sandwichs, burgers, paninis et plats, préparés sur place et à savourer ici
          ou à emporter.
        </p>
      </div>
      <CategoryNav />
      {menu.map((category, i) => (
        <MenuSection key={category.id} category={category} tone={i % 2 === 0 ? "cream" : "white"} />
      ))}
      <SauceList />
    </>
  );
}
