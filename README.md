# NigerVerdé

Site vitrine de **NigerVerdé**, une unité de production maraîchère implantée à
Diakindi, près de Niamey, au Niger. Serres adaptées à la chaleur du Sahel,
hydroponie, énergie solaire et agriculture de précision par drone.

*Marketing site for a climate-smart market-gardening operation near Niamey,
Niger. French-language, mobile-first, built for slow connections.*

**En ligne :** https://nigerverde.vercel.app

---

## Le contexte

Produire des légumes frais près de Niamey se heurte à trois contraintes :
l'eau est rare, la chaleur est forte une grande partie de l'année, et le
réseau électrique est irrégulier. NigerVerdé répond à ces contraintes par des
serres à toiture en dents de scie qui évacuent l'air chaud, de l'hydroponie
en circuit fermé, et une alimentation photovoltaïque autonome.

Le site présente le projet, les méthodes de culture, les variétés produites
et les segments visés — hôtels, restaurants, pâtisseries, épiceries et vente
directe.

> Le projet est en phase de démarrage. Les chiffres affichés sur le site sont
> des **capacités de conception**, pas des résultats commerciaux. Les
> établissements cités sont des cibles, pas des clients confirmés.

---

## Le site

Un site d'une seule page, découpé en sections : héros, présentation du
projet, technologie, cultures, marché, mission et vision, FAQ, appel à
l'action, pied de page. Deux formulaires branchés sur Resend — contact et
inscription à l'infolettre — et un bouton WhatsApp flottant, canal dominant
localement.

Contraintes de conception retenues :

- **Mobile d'abord** — l'essentiel du trafic à Niamey vient du téléphone.
- **Léger** — images optimisées et chargement différé, les connexions étant
  souvent lentes.
- **Accessible** — contrastes vérifiés, focus visibles, `aria-label`, et
  respect de `prefers-reduced-motion` pour les animations.
- **Français** (FR-FR) sur toute l'interface.

---

## Stack

| | |
|---|---|
| **Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **Styles** | Tailwind CSS, `next/font` |
| **Formulaires** | Server Actions + Resend (contact et infolettre) |
| **Mesure** | Vercel Analytics et Speed Insights |
| **Hébergement** | Vercel |

Le rendu est assuré par des composants serveur par défaut ; `"use client"`
est réservé aux quelques composants qui en ont besoin — en-tête (scroll et
menu mobile), compteurs animés, accordéon de la FAQ.

---

## Installation

```bash
git clone https://github.com/maigatechlab/nigerverde.git
cd nigerverde
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

### Variables d'environnement

Les formulaires ont besoin de :

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | Envoi des messages du formulaire de contact |
| `RESEND_AUDIENCE_ID` | Audience Resend alimentée par l'infolettre |

Sans ces valeurs, le site s'affiche normalement mais les envois échouent.

---

## Commandes

```bash
npm run dev     # développement
npm run build   # build de production
npm run start   # servir le build
npm run lint    # ESLint
```

---

## Identité visuelle

Les tokens de couleurs, la typographie et la structure des sections sont
documentés dans `Brief-Claude-Design-NigerVerde.md` et `CLAUDE.md`. Le vert
porte l'essentiel du design, l'orange sert d'accent ponctuel — le nom
s'écrit toujours **NigerVerdé**, avec l'accent.

---

Développé par [Maiga Tech Lab](https://github.com/maigatechlab) — Niamey / Calgary.
