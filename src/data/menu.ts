export interface PriceTier {
  label: string;
  price: number;
}

export interface MenuItem {
  slug: string;
  name: string;
  description?: string;
  prices: PriceTier[];
  badge?: "nouveau" | "signature";
}

export interface MenuCategory {
  id: string;
  emoji: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const restaurant = {
  name: "Royal Grill",
  tagline: "Sandwichs, Burgers & Grillades faits maison",
  phone: "01 23 45 67 89",
  address: "12 Avenue de la République, 75000 Paris",
  hours: [
    { jours: "Lundi - Jeudi", horaire: "11h00 - 23h00" },
    { jours: "Vendredi - Samedi", horaire: "11h00 - 00h30" },
    { jours: "Dimanche", horaire: "12h00 - 23h00" },
  ],
};

// Slugs des produits mis en avant dans la section "Nos Spécialités Premium"
export const premiumSlugs = [
  "big-chef",
  "triple-beef",
  "naan-beef",
  "long-beef",
  "raclette-sarrasin",
  "royal-plus",
];

export const menu: MenuCategory[] = [
  {
    id: "sandwichs",
    emoji: "🥙",
    title: "Nos Sandwichs",
    subtitle: "Salade, tomate, oignons, sauce au choix",
    items: [
      {
        slug: "sandwich-kebab",
        name: "Kebab",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "sandwich-poulet-marine",
        name: "Poulet Mariné",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "sandwich-kefta-boeuf",
        name: "Kefta de Bœuf",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "sandwich-cordon-bleu",
        name: "Cordon Bleu",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "sandwich-merguez",
        name: "Merguez",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "sandwich-tenders",
        name: "Tenders",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
    ],
  },
  {
    id: "libanais",
    emoji: "🌯",
    title: "Nos Libanais",
    subtitle: "Salade, tomate, oignons, sauce au choix",
    items: [
      {
        slug: "libanais-kebab",
        name: "Kebab",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "libanais-poulet-marine",
        name: "Poulet Mariné",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "libanais-kefta-boeuf",
        name: "Kefta de Bœuf",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "libanais-cordon-bleu",
        name: "Cordon Bleu",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "libanais-merguez",
        name: "Merguez",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "libanais-tenders",
        name: "Tenders",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "+ Frites", price: 7.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "royal",
        name: "Royal",
        description: "Kebab, steak 100g, cheddar",
        prices: [{ label: "Supplément", price: 1.0 }],
        badge: "signature",
      },
      {
        slug: "royal-plus",
        name: "Royal +",
        description: "Kebab, steak 100g, galette de pomme de terre, cheddar",
        prices: [{ label: "Supplément", price: 2.0 }],
        badge: "signature",
      },
    ],
  },
  {
    id: "paninis",
    emoji: "🥪",
    title: "Nos Paninis",
    subtitle: "Emmental, sauce au choix",
    items: [
      {
        slug: "panini-kebab",
        name: "Kebab",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
      {
        slug: "panini-poulet-marine",
        name: "Poulet Mariné",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
      {
        slug: "panini-poulet-roti",
        name: "Poulet Rôti",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
      {
        slug: "panini-saumon",
        name: "Saumon",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
      {
        slug: "panini-steak",
        name: "Steak",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
      {
        slug: "panini-kefta-boeuf",
        name: "Kefta de Bœuf",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
      {
        slug: "panini-3-fromages",
        name: "3 Fromages",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
      {
        slug: "panini-tenders",
        name: "Tenders",
        prices: [
          { label: "Seul", price: 5.5 },
          { label: "+ Frites", price: 6.5 },
          { label: "Menu", price: 7.5 },
        ],
      },
    ],
  },
  {
    id: "burgers",
    emoji: "🍔",
    title: "Nos Burgers",
    subtitle: "Crudités, sauce au choix",
    items: [
      {
        slug: "big-chef",
        name: "Big Chef",
        description: "Steak 150g façon bouchère, bacon, œuf, cheddar, crudités, sauce",
        prices: [
          { label: "Seul", price: 8.5 },
          { label: "Menu", price: 10.5 },
        ],
        badge: "signature",
      },
      {
        slug: "triple-beef",
        name: "Triple Beef",
        description: "3 steaks 90g, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 8.0 },
          { label: "Menu", price: 10.0 },
        ],
        badge: "nouveau",
      },
      {
        slug: "extra-burger",
        name: "Extra Burger",
        description: "Steak 90g, filet de poulet, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 7.0 },
          { label: "Menu", price: 9.0 },
        ],
        badge: "nouveau",
      },
      {
        slug: "double-burger",
        name: "Double Burger",
        description: "2 steaks 90g, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "hamburger-plus",
        name: "Hamburger Plus",
        description: "Steak 90g, galette de pomme de terre, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "chicken-plus",
        name: "Chicken Plus",
        description: "Filet de poulet, galette de pomme de terre, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "fish-plus",
        name: "Fish Plus",
        description: "Fish, galette de pomme de terre, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 6.5 },
          { label: "Menu", price: 8.5 },
        ],
      },
      {
        slug: "hamburger",
        name: "Hamburger",
        description: "Steak 90g, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 5.0 },
          { label: "Menu", price: 7.0 },
        ],
      },
      {
        slug: "cordon-bleu-burger",
        name: "Cordon Bleu",
        description: "Filet de poulet pané, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 5.0 },
          { label: "Menu", price: 7.0 },
        ],
      },
      {
        slug: "chicken-burger",
        name: "Chicken Burger",
        description: "Filet de poulet, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 5.0 },
          { label: "Menu", price: 7.0 },
        ],
      },
      {
        slug: "fish-burger",
        name: "Fish Burger",
        description: "Fish, fromage, crudités, sauce",
        prices: [
          { label: "Seul", price: 5.0 },
          { label: "Menu", price: 7.0 },
        ],
      },
    ],
  },
  {
    id: "long-burgers",
    emoji: "🌭",
    title: "Nos Long Burgers",
    subtitle: "Oignons frits, cheddar, crudités, sauce",
    items: [
      {
        slug: "long-chicken",
        name: "Long Chicken",
        description: "Filet de poulet, oignons frits, cheddar, crudités, sauce",
        prices: [
          { label: "Seul", price: 8.5 },
          { label: "Menu", price: 10.5 },
        ],
        badge: "nouveau",
      },
      {
        slug: "long-fish",
        name: "Long Fish",
        description: "Fish tenders, oignons frits, cheddar, crudités, sauce",
        prices: [
          { label: "Seul", price: 8.5 },
          { label: "Menu", price: 10.5 },
        ],
        badge: "nouveau",
      },
      {
        slug: "long-beef",
        name: "Long Beef",
        description: "3 steaks 45g, bacon, oignons frits, cheddar, crudités, sauce",
        prices: [
          { label: "Seul", price: 8.5 },
          { label: "Menu", price: 10.5 },
        ],
        badge: "nouveau",
      },
    ],
  },
  {
    id: "sarrasin",
    emoji: "🥞",
    title: "Nos Burgers Sarrasin",
    subtitle: "Steak 90g, cheddar, crudités",
    items: [
      {
        slug: "bacon-sarrasin",
        name: "Bacon Sarrasin",
        description: "Steak 90g, bacon, cheddar, crudités",
        prices: [
          { label: "Seul", price: 8.0 },
          { label: "Menu", price: 10.0 },
        ],
      },
      {
        slug: "raclette-sarrasin",
        name: "Raclette Sarrasin",
        description: "Steak 90g, raclette, cheddar, crudités",
        prices: [
          { label: "Seul", price: 8.0 },
          { label: "Menu", price: 10.0 },
        ],
        badge: "signature",
      },
      {
        slug: "chevre-sarrasin",
        name: "Chèvre Sarrasin",
        description: "Steak 90g, chèvre, cheddar, crudités",
        prices: [
          { label: "Seul", price: 8.0 },
          { label: "Menu", price: 10.0 },
        ],
      },
    ],
  },
  {
    id: "naan-burger",
    emoji: "🫓",
    title: "Naan Burger",
    subtitle: "Pain naan moelleux, crudités, sauce",
    items: [
      {
        slug: "naan-chicken",
        name: "Naan Chicken",
        prices: [
          { label: "Seul", price: 8.0 },
          { label: "Menu", price: 10.0 },
        ],
        badge: "signature",
      },
      {
        slug: "naan-beef",
        name: "Naan Beef",
        prices: [
          { label: "Seul", price: 8.0 },
          { label: "Menu", price: 10.0 },
        ],
        badge: "signature",
      },
    ],
  },
  {
    id: "crousty-bowls",
    emoji: "🍚",
    title: "Crousty Bowls",
    subtitle: "Riz, tenders, oignons frits — sauce nature, barbecue ou pesto",
    items: [
      {
        slug: "crousty-curry",
        name: "Crousty Curry",
        description: "Riz, tenders, sauce curry, oignon frit",
        prices: [{ label: "Seul", price: 9.9 }],
        badge: "nouveau",
      },
      {
        slug: "crousty-original",
        name: "Crousty Original",
        description: "Riz, tenders, sauce blanche, oignon frit",
        prices: [{ label: "Seul", price: 9.9 }],
        badge: "nouveau",
      },
      {
        slug: "crousty-mexicain",
        name: "Crousty Mexicain",
        description: "Riz, tenders, sauce mexicaine, oignon frit",
        prices: [{ label: "Seul", price: 9.9 }],
        badge: "nouveau",
      },
    ],
  },
  {
    id: "assiettes",
    emoji: "🍽️",
    title: "Nos Assiettes",
    subtitle: "Salade, tomate, oignon, carotte râpée, concombre, betterave, frites, boisson",
    items: [
      {
        slug: "assiette-kebab",
        name: "Assiette Kebab",
        prices: [{ label: "Assiette", price: 11.0 }],
      },
      {
        slug: "assiette-poulet-marine",
        name: "Assiette Poulet Mariné",
        prices: [{ label: "Assiette", price: 11.0 }],
      },
      {
        slug: "assiette-kefta-boeuf",
        name: "Assiette Kefta de Bœuf",
        prices: [{ label: "Assiette", price: 11.0 }],
      },
      {
        slug: "frites-seules",
        name: "Frites Seules",
        prices: [{ label: "Seul", price: 3.0 }],
      },
    ],
  },
  {
    id: "tex-mex",
    emoji: "🍗",
    title: "Nos Tex Mex",
    items: [
      {
        slug: "wings",
        name: "Wings",
        prices: [
          { label: "6 pièces", price: 7.5 },
          { label: "10 pièces", price: 11.0 },
        ],
      },
      {
        slug: "tenders-texmex",
        name: "Tenders",
        prices: [
          { label: "6 pièces", price: 8.0 },
          { label: "10 pièces", price: 13.0 },
        ],
      },
      {
        slug: "nuggets",
        name: "Nuggets",
        prices: [
          { label: "6 pièces", price: 6.0 },
          { label: "10 pièces", price: 8.0 },
        ],
      },
    ],
  },
  {
    id: "menu-enfant",
    emoji: "🎁",
    title: "Menu Enfant",
    subtitle: "+ surprise offerte",
    items: [
      {
        slug: "menu-enfant-nuggets",
        name: "5 Nuggets",
        description: "Frites + Capri-Sun + surprise",
        prices: [{ label: "Menu", price: 5.5 }],
      },
      {
        slug: "menu-enfant-cheese",
        name: "Cheeseburger",
        description: "Frites + Capri-Sun + surprise",
        prices: [{ label: "Menu", price: 5.5 }],
      },
    ],
  },
  {
    id: "menu-etudiant",
    emoji: "🎓",
    title: "Menu Étudiant",
    subtitle: "Sur présentation de la carte étudiante",
    items: [
      {
        slug: "etudiant-sandwich",
        name: "Sandwich au choix",
        prices: [{ label: "Menu", price: 7.5 }],
      },
      {
        slug: "etudiant-libanais",
        name: "Libanais au choix",
        prices: [{ label: "Menu", price: 7.5 }],
      },
      {
        slug: "etudiant-panini",
        name: "Panini au choix",
        prices: [{ label: "Menu", price: 6.5 }],
      },
    ],
  },
  {
    id: "boissons",
    emoji: "🥤",
    title: "Nos Boissons",
    items: [
      {
        slug: "coca-cola",
        name: "Coca-Cola 33cl",
        prices: [{ label: "Canette", price: 2.0 }],
      },
      {
        slug: "coca-cola-zero",
        name: "Coca-Cola Zero 33cl",
        prices: [{ label: "Canette", price: 2.0 }],
      },
      {
        slug: "fanta-orange",
        name: "Fanta Orange 33cl",
        prices: [{ label: "Canette", price: 2.0 }],
      },
      {
        slug: "sprite",
        name: "Sprite 33cl",
        prices: [{ label: "Canette", price: 2.0 }],
      },
      {
        slug: "ice-tea",
        name: "Ice Tea 33cl",
        prices: [{ label: "Canette", price: 2.0 }],
      },
      {
        slug: "oasis-tropical",
        name: "Oasis Tropical 33cl",
        prices: [{ label: "Canette", price: 2.0 }],
      },
      {
        slug: "eau-minerale",
        name: "Eau Minérale 50cl",
        prices: [{ label: "Bouteille", price: 1.5 }],
      },
    ],
  },
  {
    id: "desserts",
    emoji: "🍰",
    title: "Nos Desserts",
    items: [
      {
        slug: "tiramisu",
        name: "Tiramisu",
        prices: [{ label: "Part", price: 3.5 }],
      },
      {
        slug: "brownie",
        name: "Brownie",
        prices: [{ label: "Part", price: 3.0 }],
      },
      {
        slug: "moelleux-chocolat",
        name: "Moelleux au Chocolat",
        prices: [{ label: "Part", price: 3.5 }],
      },
      {
        slug: "cookie",
        name: "Cookie",
        prices: [{ label: "Pièce", price: 2.0 }],
      },
      {
        slug: "tarte-citron",
        name: "Tarte au Citron",
        prices: [{ label: "Part", price: 3.5 }],
      },
    ],
  },
];

export const sauces = [
  "Algérienne",
  "Andalouse",
  "Blanche",
  "Samouraï",
  "Harissa",
  "Barbecue",
  "Curry",
  "Mexicaine",
  "Pesto",
  "Poivre",
  "Ketchup",
  "Mayonnaise",
];

export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",") + " €";
}

export function findItemBySlug(slug: string): MenuItem | undefined {
  for (const category of menu) {
    const item = category.items.find((i) => i.slug === slug);
    if (item) return item;
  }
  return undefined;
}
