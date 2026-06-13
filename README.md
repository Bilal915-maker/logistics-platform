# Royal Grill — Site Web

Site vitrine professionnel pour un restaurant de sandwichs, burgers, paninis et
grillades, construit avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur http://localhost:3000

## Structure du site

- `/` — Page d'accueil : présentation, spécialités signature, aperçu de la carte.
- `/menu` — La carte complète, organisée par catégories avec navigation rapide.

## Personnaliser le restaurant

Toutes les informations générales (nom, slogan, téléphone, adresse, horaires)
se trouvent en haut du fichier [`src/data/menu.ts`](src/data/menu.ts) dans
l'objet `restaurant` :

```ts
export const restaurant = {
  name: "Royal Grill",
  tagline: "Sandwichs, Burgers & Grillades faits maison",
  phone: "01 23 45 67 89",
  address: "12 Avenue de la République, 75000 Paris",
  hours: [...],
};
```

> Le nom **"Royal Grill"** et les coordonnées sont des valeurs provisoires —
> à remplacer par les vraies informations du restaurant.

## Modifier la carte (produits, prix, descriptions)

Tout le menu (catégories, produits, descriptions, prix) est dans le même
fichier [`src/data/menu.ts`](src/data/menu.ts), sous forme de tableau
`menu`. Chaque catégorie contient une liste `items`, chaque item a :

- `name` : nom affiché
- `description` : ingrédients (optionnel)
- `prices` : un ou plusieurs tarifs (`{ label: "Menu", price: 8.5 }`)
- `badge` : `"nouveau"` ou `"signature"` (optionnel)

Les **sauces** (offertes au choix) sont listées dans `sauces`, et les
**spécialités premium** mises en avant sur la page d'accueil sont définies
dans `premiumSlugs`.

## Ajouter les photos des produits

Voir [`public/images/menu/README.md`](public/images/menu/README.md) pour la
liste exacte des noms de fichiers attendus. Tant qu'une photo n'est pas
ajoutée, un visuel de remplacement (emoji + couleur) s'affiche automatiquement.

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) :
connectez ce dépôt à Vercel, qui détectera automatiquement Next.js.
