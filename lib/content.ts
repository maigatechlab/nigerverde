export const site = {
  name: "NigerVerdé",
  domain: "nigerverde.com",
  location: "Diakindi, Niamey – Niger",
  email: "contact@nigerverde.com",
  phone: "+227 78 78 08 08",
  whatsapp: "wa.me/22778780808",
  tagline: "Agribusiness climate-smart · Niger",
}

export const nav = {
  links: [
    { label: "Accueil", href: "#" },
    { label: "Le projet", href: "#projet" },
    { label: "Modèle", href: "#modele" },
    { label: "Technologie", href: "#technologie" },
    { label: "Drone", href: "#drone" },
    { label: "Cultures", href: "#cultures" },
    { label: "Marché", href: "#marche" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Demander un devis",
}

export const hero = {
  supertitle: "AGRIBUSINESS CLIMATE-SMART · NIGER",
  title: ["Cultiver l’avenir du Sahel,", "avec"],
  titleAccent: "moins d’eau.",
  subtitle:
    "NigerVerdé produit près de Niamey des légumes frais, locaux et traçables grâce à des serres adaptées à la chaleur, à l’hydroponie, à l’énergie solaire et à l’agriculture de précision par drones.",
  ctaPrimary: "Découvrir le projet",
  ctaSecondary: "Demander un devis",
  badges: [
    { icon: "💧", label: "Moins d’eau" },
    { icon: "☀️", label: "100 % solaire" },
    { icon: "🛰️", label: "Agriculture de précision" },
  ],
}

export const intro = {
  supertitle: "Bienvenue chez NigerVerdé",
  title: "Transformer les contraintes du Sahel en récoltes.",
  text: "Un projet d’agribusiness climate-smart implanté à Diakindi, près de Niamey. Deux pôles complémentaires — serres modernes et cultures de plein champ — transforment rareté de l’eau, chaleur extrême et terres limitées en une production maraîchère moderne, régulière et de qualité.",
  tiles: [
    {
      icon: "greenhouse",
      title: "Production sous serre",
      desc: "Serres Sawtooth adaptées à la chaleur, hydroponie NFT et hors-sol cocopeat : des produits premium, réguliers, économes en eau.",
    },
    {
      icon: "field",
      title: "Cultures de plein champ",
      desc: "Moringa, piment, gombo et bissap irrigués au goutte-à-goutte : volume, diversification et transformation locale.",
    },
    {
      icon: "drone",
      title: "Agriculture de précision",
      desc: "Un drone agricole déjà en service : traitements ciblés, inspection aérienne et pilotage des intrants au plus juste, bloc par bloc.",
    },
  ],
}

export const projet = {
  supertitle: "Le projet",
  titlePlain: "Une agriculture pensée",
  titleAccent: "pour le Sahel.",
  desc: "Grâce à des technologies adaptées au climat, NigerVerdé s’engage à produire mieux, durablement, au plus près du marché de Niamey.",
  engagements: [
    {
      title: "Produire durablement",
      desc: "en économisant l’eau et en protégeant les sols.",
    },
    {
      title: "Réduire les dépendances",
      desc: "aux terres fertiles et au réseau électrique.",
    },
    {
      title: "Créer de la valeur locale",
      desc: "transformer les contraintes climatiques en opportunités économiques.",
    },
  ],
  cta: "En savoir plus sur le projet",
}

export const technologie = {
  supertitle: "Notre approche",
  title: "La technologie au service de la fraîcheur",
  cards: [
    {
      icon: 'sawtooth',
      title: 'Serres Sawtooth',
      desc: "Toiture en dents de scie qui évacue naturellement l'air chaud, ombrage ~60 %, filets anti-insectes.",
    },
    {
      icon: 'nft',
      title: 'Hydroponie NFT',
      desc: "Une serre dédiée, ~3 600 emplacements, recirculation de la solution nutritive : moins d'eau, plus de rendement.",
    },
    {
      icon: 'cocopeat',
      title: 'Culture sur cocopeat',
      desc: "Jusqu'à ~640 sacs irrigués au goutte-à-goutte pour les cultures fruitières : tomates, concombres, piments.",
    },
    {
      icon: 'solar',
      title: 'Énergie solaire',
      desc: '~4,95 kWc photovoltaïque + 14,4 kWh de batteries lithium : production autonome, sans coupures.',
    },
    {
      icon: 'water',
      title: "Gestion intelligente de l'eau",
      desc: 'Recirculation, fertigation localisée, suivi des consommations et détection des fuites.',
    },
    {
      icon: 'drone',
      title: 'Agriculture de précision & drone',
      desc: "Drone de pulvérisation pour des traitements ciblés et l'inspection aérienne. Cartographie NDVI prévue à terme.",
    },
  ],
  cta: "Voir toute notre technologie",
}

export const stats = {
  supertitle: "Capacités de conception",
  title: "Le projet en quelques chiffres",
  note: "* Capacités de conception du projet, et non des résultats commerciaux. NigerVerdé démarre : ces chiffres décrivent l’installation, pas un historique de rendement.",
  items: [
    { value: 400, unit: "m²", label: "Surface protégée — 2 serres Sawtooth 10 × 20 m", decimals: 0 },
    { value: 3600, unit: "", label: "Emplacements de culture en hydroponie NFT", decimals: 0 },
    { value: 4.95, unit: "kWc", label: "Puissance solaire installée + 14,4 kWh de batteries", decimals: 2 },
    { value: 60, unit: "%", label: "Taux d’ombrage adapté au Sahel", decimals: 0 },
  ],
}

export const cultures = {
  supertitle: "Nos cultures",
  title: "Des produits frais,\nissus de nos deux pôles",
  subtitle: "Sous serre comme en plein champ, des cultures choisies pour leur valeur, leur adaptation à la chaleur et la demande du marché de Niamey.",
  groups: [
    {
      id: "serre",
      label: "SOUS SERRE",
      icon: "greenhouse",
      tech: "Hydroponie NFT & hors-sol cocopeat",
      items: [
        { name: "Laitue", image: "/cultures/laitue.png", sublabel: "Hydroponie NFT" },
        { name: "Basilic", image: "/cultures/basilic.png", sublabel: "Aromatique" },
        { name: "Menthe", image: "/cultures/menthe.png", sublabel: "Aromatique" },
        { name: "Tomates cerises", image: "/cultures/tomatoes-cerises.png", sublabel: "Sur cocopeat" },
        { name: "Concombre", image: "/cultures/concombres.png", sublabel: "Sur cocopeat" },
        { name: "Blette", image: "/cultures/blette.png", sublabel: "Feuille" },
        { name: "Piments forts", image: "/cultures/piments-forts.png", sublabel: "Sur cocopeat" },
        { name: "Fraises premium", image: "/cultures/fraises.png", sublabel: "Édition limitée" },
      ],
    },
    {
      id: "champ",
      label: "EN PLEIN CHAMP",
      icon: "field",
      tech: "Goutte-à-goutte & énergie solaire · 1–2 ha",
      items: [
        { name: "Moringa", image: "/cultures/moringa.png", sublabel: "Feuilles & poudre" },
        { name: "Piment", image: "/cultures/piment.png", sublabel: "Forte valeur" },
        { name: "Gombo", image: "/cultures/gombo.png", sublabel: "Marché local" },
        { name: "Hibiscus / bissap", image: "/cultures/hibiscus.png", sublabel: "Transformation" },
        { name: "Pastèque", image: "/cultures/pasteque.png", sublabel: "Saison sèche" },
        { name: "Maïs", image: "/cultures/mais.png", sublabel: "Diversification" },
      ],
    },
  ],
}

export const why = {
  supertitle: "Pourquoi NigerVerdé",
  title: "Quatre raisons de cultiver avec nous",
  items: [
    {
      icon: "leaf",
      title: "Frais & local",
      desc: "Récolté à proximité du marché de Niamey, livré rapidement.",
    },
    {
      icon: "water",
      title: "Économe en eau",
      desc: "Hydroponie et fertigation qui limitent fortement les pertes.",
    },
    {
      icon: "sun",
      title: "100 % solaire",
      desc: "Énergie renouvelable et indépendance vis-à-vis du réseau.",
    },
    {
      icon: "shield",
      title: "Traçable & régulier",
      desc: "Production planifiée, qualité constante tout au long de l'année.",
    },
  ],
}

export const marche = {
  supertitle: "Pour qui",
  title: "Pour les professionnels et les particuliers exigeants",
  desc: "Nous positionnons notre production auprès des acteurs qui valorisent la fraîcheur, la régularité et l'origine locale à Niamey.",
  cta: "Devenir partenaire",
  segments: [
    { icon: "hotel", label: "Hôtels haut de gamme" },
    { icon: "restaurant", label: "Restaurants" },
    { icon: "patisserie", label: "Pâtisseries" },
    { icon: "supermarche", label: "Supermarchés modernes" },
    { icon: "epicerie", label: "Épiceries premium" },
    { icon: "expat", label: "Communauté expatriée" },
    { icon: "menage", label: "Ménages" },
    { icon: "ferme", label: "Vente directe à la ferme" },
  ],
}

export const missionVision = {
  mission: {
    label: "Notre Mission",
    text: "Développer au Niger une agriculture moderne, rentable et résiliente — produire davantage avec moins d’eau et approvisionner régulièrement le marché de Niamey.",
  },
  vision: {
    label: "Notre Vision",
    text: "Faire de NigerVerdé une référence de l’agribusiness climate-smart au Niger et au Sahel.",
  },
}

export const faq = {
  supertitle: "Questions fréquentes",
  title: "Tout ce qu’il faut savoir",
  desc: "Une question sur nos méthodes, nos cultures ou nos modalités de vente ? Les réponses essentielles, et notre équipe pour le reste.",
  items: [
    {
      q: "Qu’est-ce que NigerVerdé ?",
      a: "Un agribusiness climate-smart à Diakindi, près de Niamey, qui produit des légumes frais sous serres adaptées au Sahel grâce à l’hydroponie, le solaire et l’agriculture de précision.",
    },
    {
      q: "Pourquoi l’hydroponie au Niger ?",
      a: "Parce qu’elle permet de produire avec beaucoup moins d’eau et sans dépendre de la qualité des sols, deux contraintes majeures au Sahel.",
    },
    {
      q: "Faites-vous seulement de l’hydroponie ?",
      a: "Non. NigerVerdé associe une production sous serre (hydroponie NFT, cocopeat) à des cultures de plein champ — moringa, piment, gombo, hibiscus — irriguées au goutte-à-goutte sur 1 à 2 hectares.",
    },
    {
      q: "Quelles cultures développez-vous ?",
      a: "Sous serre : laitue, basilic, menthe, tomates cerises, concombre, blette, piments forts, fraises premium. En plein champ : moringa, piment, gombo, hibiscus/bissap, pastèque, maïs.",
    },
    {
      q: "Utilisez-vous des drones ?",
      a: "Oui. NigerVerdé dispose d’un drone agricole de pulvérisation JT20L-404 déjà acquis. Il intervient sur les cultures de plein champ pour des traitements ciblés et l’inspection aérienne.",
    },
    {
      q: "À qui vendez-vous ?",
      a: "Hôtels, restaurants, pâtisseries, supermarchés, épiceries premium, ménages et clients en vente directe à Niamey.",
    },
    {
      q: "Comment vous contacter ?",
      a: "Via le formulaire ci-dessous, par e-mail à contact@nigerverde.com ou par WhatsApp pour une réponse rapide.",
    },
  ],
}

export const finalCta = {
  title: "Prêt à cultiver l’avenir avec nous ?",
  subtitle:
    "Hôtel, restaurant, distributeur ou partenaire — parlons de vos besoins en produits frais et locaux.",
  ctaPrimary: "Nous contacter",
  ctaSecondary: "Demander un devis",
}

export const footer = {
  tagline:
    "NigerVerdé utilise des serres adaptées au Sahel, le soleil, l’hydroponie et les drones pour produire plus, avec moins d’eau.",
  copyright: `© ${new Date().getFullYear()} NigerVerdé. Tous droits réservés.`,
  columns: [
    {
      title: "Plan du site",
      links: [
        { label: "Le projet", href: "#projet" },
        { label: "Notre technologie", href: "#technologie" },
        { label: "Nos cultures", href: "#cultures" },
        { label: "Le marché", href: "#marche" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Notre technologie",
      links: [
        { label: "Serres Sawtooth", href: "#technologie" },
        { label: "Hydroponie NFT", href: "#technologie" },
        { label: "Culture sur cocopeat", href: "#technologie" },
        { label: "Énergie solaire", href: "#technologie" },
        { label: "Agriculture de précision", href: "#technologie" },
      ],
    },
  ],
}
