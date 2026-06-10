# CLAUDE.md — Site vitrine NigerVerdé (nigerverde.com)

> Fichier de contexte pour **Claude Code**. Objectif : construire le site marketing de NigerVerdé en Next.js + Tailwind, déployable en statique, en portant fidèlement la maquette de référence `index.html`.

---

## 1. Contexte produit

**NigerVerdé** — agribusiness climate-smart à **Diakindi, près de Niamey (Niger)**. Produit des légumes frais, locaux et traçables sous serres adaptées au Sahel (hydroponie NFT + cocopeat), énergie solaire, agriculture de précision par drones. Marché cible : hôtels, restaurants, supermarchés, ménages et clients premium de Niamey.

**Langue du site : français (FR-FR).** Public surtout mobile.

Source de contenu et de specs détaillées :
- `Brief-Claude-Design-NigerVerde.md` — structure page par page + textes prêts.
- `index.html` — **maquette de référence visuelle** (HTML/CSS/JS statique). À porter en composants, pas à copier tel quel.

---

## 2. Stack & décisions techniques

- **Next.js 15** (App Router) + **TypeScript**.
- **Tailwind CSS** pour le styling (tokens définis ci-dessous).
- **next/font** pour les polices (Fraunces + Manrope) — pas de `<link>` Google Fonts.
- Export **statique** : `output: 'export'` dans `next.config.ts` (site purement vitrine, pas de backend).
- Déploiement : **Vercel** (ou Netlify). Domaine : `nigerverde.com`.
- Images : `next/image` (avec `unoptimized: true` si export statique) ; placeholders en attendant les photos réelles.
- Pas de localStorage/DB. Formulaire de contact → `mailto:` + lien WhatsApp dans un premier temps (option : Formspree/Resend plus tard).

Justification : site léger, rapide (connexions lentes au Niger), SEO simple, hébergement gratuit, cohérent avec la stack habituelle (Next.js).

---

## 3. Design tokens (issus du logo officiel)

À mettre dans `tailwind.config.ts` (`theme.extend.colors`) et/ou `globals.css` (`@theme`).

```
green-primary  #1B9548   // boutons primaires, liens, accents
green-bright   #21A34E   // survols, dégradés, icônes
green-forest   #215D50
green-deep     #134F47   // sections sombres, titres
green-ink      #0C322C   // footer, fonds très sombres
orange         #E78838   // CTA secondaire, soulignés, chiffres
orange-bright  #F68F31
orange-soft    #FFB981   // accents sur fond sombre (ex: "moins d'eau")
cream          #EDDCCD
cream-soft     #F6EFE6   // fonds de section alternés
bg             #FBFDF9
text           #16271F
muted          #5B6B61
border         #E3EBE2
```

**Règle :** ~80 % vert, orange en accent ponctuel uniquement, crème pour réchauffer les fonds alternés.

**Typographie**
- Titres : **Fraunces** (serif organique, optical sizing), poids 600–700, italique pour les accents (ex. « moins d'eau »).
- Corps/UI : **Manrope**, poids 400–700.
- Échelle : H1 clamp(2.6rem,6.4vw,4.7rem) · H2 clamp(2rem,3.6vw,3rem) · corps 16–18px.

```ts
// app/fonts.ts
import { Fraunces, Manrope } from 'next/font/google'
export const display = Fraunces({ subsets:['latin'], weight:['400','500','600','700'], style:['normal','italic'], variable:'--font-display' })
export const body = Manrope({ subsets:['latin'], weight:['400','500','600','700','800'], variable:'--font-body' })
```

---

## 4. Arborescence cible

```
nigerverde/
├─ app/
│  ├─ layout.tsx          // <html lang="fr">, fonts, metadata, favicons
│  ├─ page.tsx            // page d'accueil = assemblage des sections
│  ├─ fonts.ts
│  └─ globals.css         // tokens + base
├─ components/
│  ├─ TopBar.tsx
│  ├─ Header.tsx          // sticky, transparent->solid au scroll, menu mobile
│  ├─ Hero.tsx            // fond dégradé + SVG décoratif (soleil/drone/champs)
│  ├─ Intro.tsx           // 3 tuiles
│  ├─ Projet.tsx          // split texte + photo + mission bullets
│  ├─ Technologie.tsx     // 6 cartes
│  ├─ Stats.tsx           // compteurs animés (IntersectionObserver)
│  ├─ Cultures.tsx        // galerie 8 cultures
│  ├─ Why.tsx             // 4 atouts
│  ├─ Marche.tsx          // segments
│  ├─ MissionVision.tsx
│  ├─ Faq.tsx             // accordéon
│  ├─ FinalCta.tsx
│  ├─ Footer.tsx
│  └─ WhatsAppFab.tsx
├─ lib/
│  └─ content.ts          // tous les textes FR centralisés (voir brief)
├─ public/
│  ├─ logo.svg            // emblème couleur
│  ├─ logo-white.svg      // emblème blanc (en-tête transparent / footer)
│  ├─ wordmark-white.svg  // mot-symbole blanc (navbar mobile)
│  ├─ wordmark-green.svg  // mot-symbole vert (fonds clairs)
│  ├─ favicon.ico, favicon-192.png, favicon-512.png
│  └─ photos/             // photos réelles à venir
├─ next.config.ts         // output:'export', images.unoptimized:true
├─ tailwind.config.ts
└─ CLAUDE.md
```

---

## 5. Spécification des sections (page d'accueil)

Reprendre 1:1 la structure de `index.html` / du brief :
1. **TopBar** — localisation Diakindi, tél, e-mail `contact@nigerverde.com`, réseaux.
2. **Header** — logo (blanc sur héros, couleur au scroll), nav (Le projet · Technologie · Cultures · Marché · Contact), CTA orange « Demander un devis », burger mobile. Décalé sous la TopBar en haut de page.
3. **Hero** — H1 « Cultiver l'avenir du Sahel, avec *moins d'eau.* », sous-titre, 2 CTA, 3 badges. Fond dégradé vert + SVG décoratif (soleil orange, drone, champs ondulés).
4. **Intro** — 3 tuiles (Serres adaptées à la chaleur · Hydroponie & hors-sol · Agriculture de précision).
5. **Projet** — split texte + 3 engagements (durable/eau, moins de dépendance sols+réseau, contraintes→opportunités) + zone photo.
6. **Technologie** — 6 cartes : Serres Sawtooth · Hydroponie NFT · Cocopeat · Énergie solaire · Gestion de l'eau · Précision & drones.
7. **Stats** (fond vert foncé) — compteurs : **400 m²**, **3 600**, **4,95 kWc**, **60 %** + note « capacités de conception, phase de démarrage ».
8. **Cultures** — laitue, basilic, menthe, tomates cerises, concombre, blette, piments forts, fraises premium (déc.–fév.).
9. **Why** — Frais & local · Économe en eau · 100 % solaire · Traçable & régulier.
10. **Marché** — segments (hôtels, restaurants, pâtisseries, supermarchés, épiceries premium, expatriés, ménages, vente directe).
11. **MissionVision** (fond vert foncé) — 2 blocs.
12. **FAQ** — 5 questions (voir brief), accordéon.
13. **FinalCta** — « Prêt à cultiver l'avenir avec nous ? » + Contact + WhatsApp.
14. **Footer** (vert encre) — logo blanc, baseline, navigation, contact, newsletter.
15. **WhatsAppFab** — bouton flottant.

---

## 6. Règles de contenu (importantes)

- **Honnêteté** : le projet est en **phase de démarrage**. Les chiffres sont des **capacités de conception**, jamais des résultats commerciaux. **Pas de faux témoignages, pas de fausses certifications, pas de chiffres de rendement inventés.**
- Lieu : toujours **Diakindi** (pas Sadoré).
- Toujours écrire le nom avec accent : **NigerVerdé**.
- Hôtels/restaurants nommés = **cibles potentielles**, pas clients confirmés (ne pas les citer comme références sans accord).
- Téléphone/WhatsApp : placeholders `+227 — — —` et `wa.me/227` à remplacer.

---

## 7. Conventions

- **Mobile-first**, accessible (contrastes, `aria-label`, focus visibles, `prefers-reduced-motion` pour désactiver les animations).
- Composants serveur par défaut ; `"use client"` seulement pour Header (scroll/menu), Stats (compteurs), Faq (accordéon).
- Animations : reveal au scroll via IntersectionObserver, compteurs animés, transitions douces. Pas de librairie lourde nécessaire.
- Performance : images optimisées/lazy, pas de dépendances superflues. Cible Lighthouse > 95.
- SEO : `metadata` complet (title, description, OpenGraph), `lang="fr"`, balises sémantiques.

---

## 8. Commandes

```bash
npx create-next-app@latest nigerverde --typescript --tailwind --app --eslint
cd nigerverde
# copier les assets dans public/, ce fichier à la racine, le brief à côté
npm run dev        # développement
npm run build      # build statique (output: 'export') -> ./out
# déploiement : connecter le repo à Vercel, ou `netlify deploy --dir=out`
```

---

## 9. Première session Claude Code (BMAD)

- [ ] **Scaffold** : créer le projet Next.js, configurer Tailwind avec les tokens (§3), `next/font` (§3), `output:'export'`.
- [ ] **Layout** : `app/layout.tsx` (lang fr, fonts, metadata, favicons depuis `public/`).
- [ ] **Contenu** : centraliser tous les textes FR dans `lib/content.ts` (depuis le brief).
- [ ] **Composants** : générer les 15 composants (§4) en portant la maquette `index.html`.
- [ ] **Assemblage** : `app/page.tsx` importe les sections dans l'ordre (§5).
- [ ] **Responsive + a11y** : vérifier mobile, focus, reduced-motion.
- [ ] **Build & preview** : `npm run build`, contrôler `./out`.
- [ ] **Déploiement** : Vercel + domaine nigerverde.com.

> Astuce : ouvrir `index.html` dans le navigateur à côté pour comparer le rendu pixel à pixel pendant le portage.
