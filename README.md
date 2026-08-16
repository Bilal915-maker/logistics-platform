# Atelier Fil d'Or — Site Web

Site vitrine professionnel pour un atelier de couture et de broderie, construit
avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur http://localhost:3000

## Structure du site

- `/` — Page d'accueil : présentation, prestations, à propos, galerie, avis clients.
- `/services` — Détail de toutes les prestations (couture, broderie, retouches...).
- `/galerie` — Portfolio des réalisations, filtrable par catégorie.
- `/a-propos` — Présentation de l'atelier et avis clients.
- `/contact` — Formulaire de contact, coordonnées et horaires.

## Personnaliser l'atelier

Toutes les informations générales (nom, slogan, téléphone, email, adresse,
horaires, réseaux sociaux) se trouvent en haut du fichier
[`src/data/site.ts`](src/data/site.ts) dans l'objet `atelier` :

```ts
export const atelier = {
  name: "Atelier Fil d'Or",
  tagline: "Couture sur mesure & Broderie artisanale",
  phone: "01 23 45 67 89",
  email: "contact@atelierfildor.fr",
  address: "8 Rue des Tisserands, 75011 Paris",
  hours: [...],
};
```

> Le nom **"Atelier Fil d'Or"** et les coordonnées sont des valeurs
> provisoires — à remplacer par les vraies informations de l'atelier.

## Modifier les prestations, la galerie et les avis

Tout le contenu (prestations, réalisations de la galerie, avis clients) est
dans le même fichier [`src/data/site.ts`](src/data/site.ts) :

- `services` : liste des prestations (titre, description, détails, icône).
- `galleryItems` : réalisations affichées dans la galerie (titre, catégorie).
- `testimonials` : avis clients affichés sur le site.

## Ajouter les photos des réalisations

Voir [`public/images/gallery/README.md`](public/images/gallery/README.md)
pour la liste exacte des noms de fichiers attendus. Tant qu'une photo n'est
pas ajoutée, un visuel de remplacement (emoji + couleur) s'affiche
automatiquement.

## Formulaire de contact

Le formulaire de la page `/contact` prépare un e-mail (objet et message) et
ouvre le client de messagerie du visiteur, à l'adresse définie dans
`atelier.email`. Il ne nécessite aucun serveur ou service tiers.

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) :
connectez ce dépôt à Vercel, qui détectera automatiquement Next.js.
