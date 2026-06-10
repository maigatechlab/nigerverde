# Brief de design — Site web NigerVerdé (nigerverde.com)

> **À coller dans Claude Design.** Ce document contient tout : positionnement, identité visuelle, tokens de couleurs (tirés du logo officiel), structure page par page, et tous les textes en français prêts à l'emploi. Langue du site : **français** (FR-FR). Marché : Niamey, Niger.

---

## 1. Brief en une phrase pour Claude Design

> Conçois un site vitrine moderne, premium et chaleureux pour **NigerVerdé**, un agribusiness climate-smart basé à Diakindi (près de Niamey, Niger) qui produit des légumes frais sous serres adaptées au Sahel grâce à l'hydroponie, l'énergie solaire et l'agriculture de précision par drones. Style et structure inspirés de `https://agribusiness.cmsmasters.studio/main/` — mais adapté à un **producteur** (et non un cabinet de conseil), en français, et habillé aux couleurs vert + orange du logo NigerVerdé.

---

## 2. Ce qu'il faut reprendre du site de référence (et ce qu'il faut changer)

**À reprendre (l'ADN visuel) :**
- Vert agricole dominant, ambiance terre + nature, beaucoup d'espace blanc.
- Grandes images plein cadre, héros immersif avec deux boutons d'action.
- Sections en bandes alternées, cartes arrondies, compteurs de statistiques animés.
- Bloc « Pourquoi nous choisir », témoignages, FAQ en accordéon, CTA final fort.
- En-tête collant (sticky) avec barre supérieure (téléphone / e-mail / réseaux).

**À changer (parce que NigerVerdé est un producteur, pas un consultant) :**
- « Services & Solutions » → **« Notre technologie / Notre approche »** (les méthodes de culture).
- Ajouter une section **« Nos cultures / Nos produits »** (catalogue légumes).
- « Acres Managed since 1996 » → remplacer par des **chiffres réels du projet** (capacités de conception), pas de chiffres inventés.
- **Pas de faux témoignages ni de fausses certifications.** Le projet démarre : positionner les hôtels/restaurants comme *cibles* et non comme clients confirmés.
- Tout en **français**.

---

## 3. Identité de marque

**Nom :** NigerVerdé (toujours avec l'accent sur le « é »).
**Domaine :** nigerverde.com
**Logo :** emblème circulaire — soleil orange, drone, ferme verte, capteurs/smartphone (IoT), champs ondulés, couronne de feuilles. Mot-symbole « **Niger** » en orange + « **Verdé** » en vert. À placer sur fond clair ; prévoir une version mono-blanc pour l'en-tête transparent et le pied de page foncé.

**Personnalité de marque :** moderne, technologique, optimiste, ancrée localement (Sahel/Niger), sérieuse mais accessible. Évoque *fraîcheur*, *innovation*, *résilience climatique*, *confiance*.

**Ton éditorial :** clair, concret, valorisant le local. Phrases courtes. Pas de jargon inutile. On parle de produits frais ET de technologie maîtrisée.

### Palette de couleurs (extraite du logo — à utiliser comme tokens)

```css
/* Verts — couleur dominante */
--green-primary:  #1B9548;  /* vert principal (boutons, liens, titres accent) */
--green-bright:   #21A34E;  /* vert vif (survols, dégradés, icônes) */
--green-forest:   #215D50;  /* vert sapin (sections, badges) */
--green-deep:     #134F47;  /* vert très foncé (pied de page, fonds sombres, texte titre) */

/* Oranges — couleur d'accent (soleil / énergie / récolte) */
--orange-accent:  #E78838;  /* orange principal d'accent (CTA secondaire, soulignés) */
--orange-bright:  #F68F31;  /* orange vif (highlights, icône soleil) */
--orange-soft:    #FFB981;  /* orange clair (fonds doux, badges) */

/* Neutres */
--cream:          #EDDCCD;  /* crème chaud (fonds de section alternés) */
--bg:             #FBFDF9;  /* fond général très légèrement verdâtre */
--white:          #FFFFFF;
--text:           #16271F;  /* texte courant (vert-noir doux) */
--text-muted:     #5B6B61;  /* texte secondaire */
--border:         #E3EBE2;
```

**Règle d'usage couleur :** le **vert** porte ~80 % du design (structure, boutons primaires, titres). L'**orange** est un accent ponctuel et énergique (CTA « Demander un devis », chiffres clés, icône soleil, soulignés de titres) — jamais en aplat dominant. Le **crème** sert de fond alterné pour réchauffer sans surcharger.

### Typographie

- **Titres :** `Sora` ou `Outfit` (sans-serif géométrique, moderne et chaleureux). Poids 600–700.
- **Corps :** `Inter` (lisible, neutre, excellent en français). Poids 400–500.
- Échelle suggérée : H1 48–64px, H2 32–40px, H3 22–26px, corps 16–18px, petit 14px.
- Accents possibles sur certains titres : mettre un mot en `--green-primary` ou souligner en `--orange-accent` (rappel du logo bicolore).

---

## 4. Arborescence du site

```
Accueil (/)
Le projet / À propos (/le-projet)
Notre technologie (/technologie)
    ├─ Serres adaptées au Sahel (Sawtooth)
    ├─ Hydroponie NFT
    ├─ Culture hors-sol (cocopeat)
    ├─ Énergie solaire
    ├─ Gestion intelligente de l'eau
    └─ Agriculture de précision & drones
Nos cultures (/cultures)
Le marché / Pour qui (/marche)
Contact (/contact)
Blog / Actualités (optionnel — /actualites)
```

Navigation principale : **Accueil · Le projet · Technologie · Cultures · Marché · Contact** + bouton **« Demander un devis »** (orange).

---

## 5. Page d'accueil — structure section par section (textes prêts)

### 5.1 Barre supérieure (top bar)
Fond `--green-deep`, texte clair. Gauche : `📍 Diakindi, Niamey – Niger`. Centre/droite : téléphone + e-mail (`contact@nigerverde.com`). Réseaux sociaux à droite. Petit bouton « Demander un devis ».

### 5.2 En-tête (sticky)
Logo NigerVerdé à gauche (version blanche sur héros transparent, version couleur au scroll sur fond blanc). Menu centré. Bouton orange « Demander un devis » à droite.

### 5.3 Héros (plein écran)
Image de fond : intérieur d'une serre verdoyante / rangées de laitues hydroponiques / lumière du Sahel. Overlay vert sombre dégradé pour la lisibilité.

- **Sur-titre :** AGRIBUSINESS CLIMATE-SMART · NIGER
- **Titre H1 :** Cultiver l'avenir du Sahel, avec **moins d'eau**.
- **Sous-titre :** NigerVerdé produit près de Niamey des légumes frais, locaux et traçables grâce à des serres adaptées à la chaleur, à l'hydroponie, à l'énergie solaire et à l'agriculture de précision par drones.
- **Boutons :** [ Découvrir le projet ] (vert) · [ Demander un devis ] (orange contour)
- Optionnel : 3 mini-badges sous le héros — « 💧 Moins d'eau » · « ☀️ 100 % solaire » · « 🛰️ Agriculture de précision ».

### 5.4 Bandeau d'introduction
- **Sur-titre :** Bienvenue chez NigerVerdé
- **Texte :** Un projet d'agribusiness climate-smart implanté à Diakindi, près de Niamey. Nous transformons les contraintes du Sahel — rareté de l'eau, chaleur extrême, terres limitées — en une production maraîchère moderne, régulière et de qualité.
- 3 tuiles avec icône : **Serres adaptées à la chaleur** · **Hydroponie & hors-sol** · **Agriculture de précision**

### 5.5 Le projet / À propos (texte + image)
- **Titre H2 :** Une agriculture pensée pour le Sahel
- **Texte :** Grâce à des technologies adaptées au climat, NigerVerdé s'engage à :
  - produire de façon durable, en économisant l'eau et en protégeant les sols ;
  - réduire la dépendance aux terres fertiles et au réseau électrique ;
  - démontrer qu'au Niger, les contraintes climatiques peuvent devenir des opportunités économiques.
- **CTA :** [ En savoir plus sur le projet ]

### 5.6 Notre technologie (grille de cartes)
- **Sur-titre :** Notre approche
- **Titre H2 :** La technologie au service de la fraîcheur
- 6 cartes (icône + titre + 1 phrase) :
  1. **Serres Sawtooth** — Toiture en dents de scie qui évacue naturellement l'air chaud, ombrage ~60 %, filets anti-insectes.
  2. **Hydroponie NFT** — Une serre dédiée, ~3 600 emplacements, recirculation de la solution nutritive : moins d'eau, plus de rendement.
  3. **Culture sur cocopeat** — Jusqu'à ~640 sacs irrigués au goutte-à-goutte pour les cultures fruitières (tomates, concombres, piments).
  4. **Énergie solaire** — ~4,95 kWc photovoltaïque + 14,4 kWh de batteries lithium : production autonome, sans coupures.
  5. **Gestion intelligente de l'eau** — Recirculation, fertigation localisée, suivi des consommations et détection des fuites.
  6. **Agriculture de précision & drones** — Cartographie, suivi NDVI de la santé des cultures et pulvérisation ciblée.
- **CTA :** [ Voir toute notre technologie ]

### 5.7 Chiffres clés (compteurs animés — VRAIS chiffres)
Fond `--green-deep` ou image champ avec overlay. Compteurs :
- **400 m²** — Surface protégée (2 serres Sawtooth 10×20 m)
- **3 600** — Emplacements de culture en hydroponie NFT
- **4,95 kWc** — Puissance solaire installée
- **60 %** — Taux d'ombrage adapté au Sahel
> Note : ce sont des capacités de conception du projet, pas des résultats commerciaux. Ne pas inventer de chiffres de rendement ou d'ancienneté.

### 5.8 Nos cultures (galerie)
- **Titre H2 :** Des produits frais, sélectionnés pour Niamey
- Cartes produits avec photo : **Laitue · Basilic · Menthe · Tomates cerises · Concombre · Blette · Piments forts · Fraises premium** (mention « saison fraîche déc.–fév. » pour la fraise).
- Sous-texte : Cultures choisies pour leur valeur, leur adaptation à la chaleur et la demande du marché de Niamey.

### 5.9 Pourquoi NigerVerdé (4 atouts)
- **Frais & local** — Récolté à proximité du marché, livré rapidement.
- **Économe en eau** — Hydroponie et fertigation qui limitent les pertes.
- **100 % solaire** — Énergie renouvelable, indépendance électrique.
- **Traçable & régulier** — Production planifiée, qualité constante.

### 5.10 Pour qui (segments de marché)
- **Titre H2 :** Pour les professionnels et les particuliers exigeants
- Logos / icônes de segments : Hôtels haut de gamme · Restaurants · Pâtisseries · Supermarchés modernes · Épiceries premium · Communauté expatriée · Ménages · Vente directe à la ferme.

### 5.11 Mission / Vision (bande citation)
- **Mission :** Développer au Niger une agriculture moderne, rentable et résiliente — produire davantage avec moins d'eau et approvisionner régulièrement le marché de Niamey.
- **Vision :** Faire de NigerVerdé une référence de l'agribusiness climate-smart au Niger et au Sahel.

### 5.12 CTA final
Fond image serre + overlay vert.
- **Titre :** Prêt à cultiver l'avenir avec nous ?
- **Texte :** Hôtel, restaurant, distributeur ou partenaire — parlons de vos besoins en produits frais et locaux.
- **Boutons :** [ Nous contacter ] (orange) · [ Demander un devis ]

### 5.13 Pied de page
Fond `--green-deep`. Logo blanc + baseline « NigerVerdé utilise des serres adaptées au Sahel, le soleil, l'hydroponie et les drones pour produire plus, avec moins d'eau. » Colonnes : Plan du site · Notre technologie · Contact (Diakindi, Niamey – Niger ; téléphone ; e-mail) · Newsletter. Réseaux sociaux. Copyright © 2026 NigerVerdé.

---

## 6. Direction artistique des images

- **Vraies photos** à privilégier : intérieur de serre, rangées NFT de laitues, plants sur cocopeat, panneaux solaires sous ciel sahélien, drone agricole au-dessus d'un champ, mains tenant des légumes frais, lumière chaude.
- **Ambiance :** lumineux, vert intense + accents terre/orange, ciel du Sahel. Éviter les banques d'images génériques « corporate » froides.
- Si pas de photo réelle disponible : placeholders propres + note « à remplacer par photo réelle de NigerVerdé ». Possibilité d'illustrations vectorielles vertes/oranges cohérentes avec le logo.
- Icônes : style ligne (line icons) verts, arrondis, cohérents avec l'esprit du logo.

---

## 7. Détails techniques pour Claude Design

- **Responsive** mobile-first (la majorité des visiteurs Niamey seront sur mobile).
- **Performance / poids léger** : connexions parfois lentes au Niger — images optimisées, lazy-loading.
- Composants : en-tête sticky, menu mobile (hamburger), boutons arrondis, cartes à ombre douce, compteurs animés au scroll, accordéon FAQ, formulaire de contact simple (Nom, Structure, Téléphone/WhatsApp, Message).
- Mettre en avant le **WhatsApp** comme canal de contact (bouton flottant) — usage local dominant.
- Coordonnées : Diakindi, Niamey – Niger · e-mail `contact@nigerverde.com` · prévoir numéro WhatsApp.
- Accessibilité : contrastes suffisants (le vert foncé sur crème et le blanc sur vert passent bien).

---

## 8. FAQ (accordéon — textes prêts)

- **Qu'est-ce que NigerVerdé ?** Un agribusiness climate-smart à Diakindi, près de Niamey, qui produit des légumes frais sous serres adaptées au Sahel grâce à l'hydroponie, le solaire et l'agriculture de précision.
- **Pourquoi l'hydroponie au Niger ?** Parce qu'elle permet de produire avec beaucoup moins d'eau et sans dépendre de la qualité des sols, deux contraintes majeures au Sahel.
- **Quels légumes cultivez-vous ?** Laitue, basilic, menthe, tomates cerises, concombre, blette, piments forts et fraises premium en saison fraîche.
- **À qui vendez-vous ?** Hôtels, restaurants, pâtisseries, supermarchés, épiceries premium, ménages et clients en vente directe à Niamey.
- **Comment vous contacter ?** Via le formulaire, par e-mail ou par WhatsApp pour une réponse rapide.

---

*Fin du brief. Tout le contenu textuel ci-dessus est en français et prêt à être intégré. Conserver l'accent sur « NigerVerdé » et respecter les tokens de couleurs du logo.*
