export interface Service {
  slug: string;
  icon: "Scissors" | "Ruler" | "Sparkles" | "Palette" | "RefreshCw" | "Users";
  title: string;
  description: string;
  details: string[];
}

export interface GalleryItem {
  slug: string;
  category: string;
  title: string;
  emoji: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const atelier = {
  name: "Atelier Fil d'Or",
  tagline: "Couture sur mesure & Broderie artisanale",
  description:
    "Un atelier de couture et de broderie où chaque pièce est façonnée avec passion, à la main comme à la machine, pour donner vie à vos idées et sublimer vos tenues.",
  phone: "01 23 45 67 89",
  whatsapp: "33123456789",
  email: "contact@atelierfildor.fr",
  address: "8 Rue des Tisserands, 75011 Paris",
  instagram: "atelierfildor",
  facebook: "atelierfildor",
  hours: [
    { jours: "Lundi", horaire: "Fermé" },
    { jours: "Mardi - Vendredi", horaire: "10h00 - 18h30" },
    { jours: "Samedi", horaire: "10h00 - 17h00" },
    { jours: "Dimanche", horaire: "Fermé" },
  ],
};

export const services: Service[] = [
  {
    slug: "couture-sur-mesure",
    icon: "Scissors",
    title: "Couture sur mesure",
    description:
      "Robes, costumes et tenues de cérémonie réalisés entièrement à vos mesures, du patron à la finition.",
    details: [
      "Prise de mesures et conseils de matières en atelier",
      "Patronage individuel adapté à votre silhouette",
      "Essayages successifs jusqu'à la coupe parfaite",
      "Robes de mariée, costumes, tenues de soirée et du quotidien",
    ],
  },
  {
    slug: "retouches-ajustements",
    icon: "Ruler",
    title: "Retouches & Ajustements",
    description:
      "Ourlets, reprises et ajustements de taille : redonnez à vos vêtements une coupe impeccable.",
    details: [
      "Ourlets de pantalons, robes et manteaux",
      "Ajustement de taille, épaules et manches",
      "Remplacement de fermetures éclair et boutons",
      "Retouches de robes de mariée et costumes",
    ],
  },
  {
    slug: "broderie-personnalisee",
    icon: "Sparkles",
    title: "Broderie personnalisée",
    description:
      "Initiales, logos et motifs brodés à la main ou à la machine, sur vêtements, linge ou accessoires.",
    details: [
      "Broderie de logos et textiles professionnels",
      "Initiales et monogrammes sur linge de maison",
      "Motifs floraux et créations brodées main",
      "Personnalisation de vêtements et accessoires",
    ],
  },
  {
    slug: "creation-decoration-textile",
    icon: "Palette",
    title: "Création textile & décoration",
    description:
      "Coussins, rideaux, nappes et linge de maison confectionnés sur mesure selon vos envies.",
    details: [
      "Rideaux et voilages doublés sur mesure",
      "Coussins, housses et nappes personnalisés",
      "Choix des tissus et finitions en atelier",
      "Conseils déco pour harmoniser votre intérieur",
    ],
  },
  {
    slug: "reparations-transformations",
    icon: "RefreshCw",
    title: "Réparations & Transformations",
    description:
      "Réparez, transformez ou recyclez vos vêtements et textiles préférés plutôt que de les jeter.",
    details: [
      "Reprises de tissus déchirés ou usés",
      "Transformation de vêtements anciens",
      "Recyclage textile et upcycling créatif",
      "Doublures et renforts sur mesure",
    ],
  },
  {
    slug: "cours-ateliers",
    icon: "Users",
    title: "Cours & Ateliers",
    description:
      "Initiez-vous à la couture et à la broderie lors de nos ateliers en petit groupe, tous niveaux.",
    details: [
      "Ateliers découverte couture et broderie",
      "Cours particuliers ou en petit groupe",
      "Matériel et machines fournis sur place",
      "Formules ponctuelles ou cycles de plusieurs séances",
    ],
  },
];

export const galleryCategories = [
  "Toutes",
  "Robes & Tenues",
  "Broderie",
  "Retouches",
  "Linge de maison",
];

export const galleryItems: GalleryItem[] = [
  {
    slug: "robe-soiree",
    category: "Robes & Tenues",
    title: "Robe de soirée sur mesure",
    emoji: "👗",
  },
  {
    slug: "costume-mariage",
    category: "Robes & Tenues",
    title: "Costume de mariage",
    emoji: "🤵",
  },
  {
    slug: "robe-mariee",
    category: "Robes & Tenues",
    title: "Robe de mariée revisitée",
    emoji: "👰",
  },
  {
    slug: "initiales-brodees",
    category: "Broderie",
    title: "Initiales brodées main",
    emoji: "🧵",
  },
  {
    slug: "logo-brode",
    category: "Broderie",
    title: "Logo d'entreprise brodé",
    emoji: "✨",
  },
  {
    slug: "motif-floral",
    category: "Broderie",
    title: "Motif floral brodé main",
    emoji: "🌸",
  },
  {
    slug: "ourlet-pantalon",
    category: "Retouches",
    title: "Ourlet & retouche pantalon",
    emoji: "👖",
  },
  {
    slug: "veste-ajustee",
    category: "Retouches",
    title: "Veste ajustée aux épaules",
    emoji: "🧥",
  },
  {
    slug: "coussins-sur-mesure",
    category: "Linge de maison",
    title: "Coussins sur mesure",
    emoji: "🛋️",
  },
  {
    slug: "rideaux-doubles",
    category: "Linge de maison",
    title: "Rideaux doublés",
    emoji: "🪟",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sophie M.",
    role: "Robe de mariée retouchée",
    quote:
      "Ma robe de mariée a été retouchée à la perfection. Un travail minutieux, à l'écoute et un accueil chaleureux du début à la fin.",
    rating: 5,
  },
  {
    name: "Karim B.",
    role: "Broderie professionnelle",
    quote:
      "La broderie de notre logo sur les polos de l'équipe est impeccable, exactement le rendu qu'on recherchait pour l'entreprise.",
    rating: 5,
  },
  {
    name: "Élodie R.",
    role: "Atelier couture débutant",
    quote:
      "Des cours de couture passionnants et un cadre convivial. J'ai enfin appris à confectionner mes propres vêtements !",
    rating: 5,
  },
];

export function iconIsValid(icon: string): icon is Service["icon"] {
  return ["Scissors", "Ruler", "Sparkles", "Palette", "RefreshCw", "Users"].includes(icon);
}
