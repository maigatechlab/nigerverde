import Image from 'next/image'

const specs = [
  { title: 'JT20L-404', desc: 'Drone de pulvérisation déjà en service' },
  { title: 'Plein champ', desc: 'Moringa, piment, gombo, hibiscus, pastèque' },
  { title: 'Ciblé', desc: 'Traitement bloc par bloc, jamais systématique' },
  { title: '6 étapes', desc: "Une procédure d'intervention encadrée" },
]

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]">
        <circle cx="12" cy="12" r="2" /><path d="M12 10V7M12 17v-3M10 12H7M17 12h-3" /><circle cx="12" cy="6" r="1.5" /><circle cx="12" cy="18" r="1.5" /><circle cx="6" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" />
      </svg>
    ),
    title: 'Pulvérisation de précision',
    desc: "Neem, produits de biocontrôle, traitements biologiques homologués, engrais foliaires et micronutriments — appliqués uniquement là où le besoin est observé.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]">
        <path d="M12 2C6 10 4 14 4 17a8 8 0 0 0 16 0c0-3-2-7-8-15Z" /><path d="M12 17a3 3 0 0 0 3-3" />
      </svg>
    ),
    title: 'Inspection aérienne',
    desc: "Repérer zones sèches, plants manquants, faible couverture végétale, fuites d'irrigation et différences entre blocs — puis comparer l'évolution dans le temps.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Cartographie du domaine',
    desc: "Délimiter les parcelles, mesurer les superficies, localiser serres, blocs et conduites d'irrigation pour planifier l'aménagement de Diakindi.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Documentation & registre',
    desc: "Chaque mission consignée — date, bloc, produit, dose, météo, images avant/après — au service de la traçabilité, des coûts et de la sécurité alimentaire.",
  },
]

const steps = [
  { num: 1, title: 'Observation', desc: "Repérer une anomalie : inspections manuelles, images aériennes, données d'irrigation, capteurs d'humidité, écarts de rendement." },
  { num: 2, title: 'Vérification au sol', desc: "Inspecter directement les plantes pour identifier la véritable cause — manque d'eau, carence, ravageur, maladie ou panne du goutte-à-goutte." },
  { num: 3, title: 'Décision', desc: "Choisir l'action juste : correction de l'irrigation ou de la fertilisation, taille, désherbage, drainage, traitement biologique ou pulvérisation ciblée." },
  { num: 4, title: 'Préparation de la mission', desc: "Définir parcelle, surface, produit, dose, volume de bouillie, hauteur de vol, vitesse, largeur de travail, météo et zones à éviter." },
  { num: 5, title: 'Intervention', desc: "Pulvériser en respectant limites de parcelle, distances de sécurité, doses, vent et protection des travailleurs, habitations et points d'eau." },
  { num: 6, title: 'Contrôle', desc: "Revenir vérifier la qualité de la couverture, l'évolution du problème, l'efficacité du traitement et le besoin éventuel d'une nouvelle intervention." },
]

const levels = [
  {
    badge: 'NIVEAU ACTUEL',
    title: 'Pulvérisation & suivi de terrain',
    cardBg: 'bg-[#134F47]',
    badgeColor: 'text-[#E78838]',
    titleColor: 'text-white',
    checkColor: 'text-[#E78838]',
    itemColor: 'text-white/80',
    items: [
      "Pulvérisation agricole et interventions localisées, bloc par bloc",
      "Suivi visuel lorsqu'une caméra compatible est disponible",
      "Documentation des opérations et comparaison des blocs",
      "Réduction du travail manuel de pulvérisation",
    ],
  },
  {
    badge: 'ÉVOLUTION PRÉVUE',
    title: 'Cartographie multispectrale & NDVI',
    cardBg: 'bg-[#F6EFE6]',
    badgeColor: 'text-[#E78838]',
    titleColor: 'text-[#134F47]',
    checkColor: 'text-[#1B9548]',
    itemColor: 'text-[#5B6B61]',
    items: [
      "Acquisition d'un drone multispectral dédié",
      "Cartographie NDVI et suivi détaillé de la vigueur des cultures",
      "Détection précoce des anomalies et zones de stress",
      "Cartes de prescription et traitement différencié des zones",
    ],
  },
]

export default function Drone() {
  return (
    <section id="drone" className="bg-[#FBFDF9]" aria-labelledby="drone-heading">

      {/* Hero — image + text */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/photos/drone.png"
                alt="Drone agricole JT20L-404 de NigerVerdé"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-5 left-5 bg-[#134F47]/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-[180px]">
                <span className="inline-block bg-[#E78838]/25 text-[#FFB981] text-xs font-bold px-3 py-1 rounded-full mb-2">DÉJÀ ACQUIS</span>
                <p className="font-display font-bold text-[#E78838] text-xl leading-tight">JT20L-404</p>
                <p className="text-white/70 text-xs mt-1">Drone agricole de pulvérisation</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#1B9548]">Agriculture de précision · Plein champ</p>
              </div>
              <h2 id="drone-heading" className="font-display font-bold text-[#134F47] text-balance leading-tight mb-5" style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}>
                Un drone agricole, pour intervenir{' '}
                <span className="relative inline-block">
                  au plus juste
                  <span className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-sm bg-[#E78838]/25 -z-10" aria-hidden="true" />
                </span>
              </h2>
              <p className="text-[#5B6B61] text-sm leading-relaxed mb-7">
                NigerVerdé pratique l&apos;agriculture de précision avec un drone agricole de pulvérisation déjà acquis. Il intervient sur les cultures de plein champ — moringa, piment, gombo, hibiscus — pour des traitements ciblés, des applications biologiques ou foliaires et la documentation de l&apos;état des parcelles. Les observations aériennes sont toujours combinées aux inspections au sol, aux analyses de sol et d&apos;eau, aux capteurs d&apos;humidité et aux données d&apos;irrigation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec) => {
                  const numMatch = spec.title.match(/^(\d+)\s+(.+)$/)
                  return (
                    <div key={spec.title} className="bg-white border border-[#E3EBE2] rounded-2xl p-4 shadow-sm">
                      <p className="font-display font-bold text-[#134F47] text-base mb-1">
                        {numMatch ? (
                          <><span className="text-[#E78838]">{numMatch[1]}</span>{' '}{numMatch[2]}</>
                        ) : spec.title}
                      </p>
                      <p className="text-[#5B6B61] text-xs leading-snug">{spec.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="py-14 bg-[#FBFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#1B9548] mb-8">Ce que permet le drone</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white rounded-2xl p-5 border border-[#E3EBE2] shadow-sm">
                <div className="w-10 h-10 bg-[#E8F5EE] rounded-xl flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h3 className="font-display font-bold text-[#134F47] text-sm mb-2">{cap.title}</h3>
                <p className="text-[#5B6B61] text-xs leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6-step procedure */}
      <div className="py-14 bg-[#FBFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#1B9548] mb-8">La procédure d&apos;intervention · 6 étapes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-5 border border-[#E3EBE2] shadow-sm flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-[#1B9548] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#134F47] text-sm mb-1">{step.title}</h3>
                  <p className="text-[#5B6B61] text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="bg-[#134F47] rounded-2xl px-6 py-5 flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#FFB981]" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <p className="text-white/85 text-sm leading-relaxed">
            <strong className="font-semibold text-white">La sécurité avant tout.</strong>{' '}
            Aucune pulvérisation ne part vent fort, pluie imminente ou en présence de personnes et d&apos;animaux. Une attention particulière protège les serres hydroponiques, les réservoirs et l&apos;eau d&apos;irrigation de toute dérive — et chaque mission est consignée dans un registre numérique.
          </p>
        </div>
      </div>

      {/* Two precision levels */}
      <div className="py-14 bg-[#FBFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#1B9548] shrink-0">Deux niveaux de précision</p>
            <div className="flex-1 h-px bg-[#E3EBE2]" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {levels.map((level) => (
              <div key={level.badge} className={`${level.cardBg} rounded-2xl p-6`}>
                <p className={`text-xs font-bold tracking-[0.15em] uppercase ${level.badgeColor} mb-3`}>{level.badge}</p>
                <h3 className={`font-display font-bold text-2xl mb-5 ${level.titleColor}`}>{level.title}</h3>
                <ul className="space-y-3">
                  {level.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 ${level.checkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm leading-snug ${level.itemColor}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[#5B6B61] text-xs leading-relaxed mt-6 max-w-3xl">
            Le drone de pulvérisation déjà acquis n&apos;est pas un drone multispectral. La cartographie NDVI nécessite un capteur dédié, un positionnement précis et un traitement spécialisé des images : c&apos;est une évolution prévue de notre agriculture de précision, et{' '}
            <span className="text-[#E78838] font-medium">non une capacité actuelle.</span>
          </p>
        </div>
      </div>

    </section>
  )
}
