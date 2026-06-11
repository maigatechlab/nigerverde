import Image from 'next/image'

const poles = [
  {
    num: '01',
    tag: 'SOUS SERRE',
    title: 'Production sous serre',
    image: '/photos/vert1.png',
    imageAlt: 'Serre NigerVerdé — production hydroponique sous serre',
    badgeColor: 'bg-[#1B9548]',
    tagColor: 'bg-[#155C35]/8 text-[#155C35] border border-[#155C35]/20',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    desc: "Deux serres Sawtooth adaptées à la chaleur protègent les cultures sensibles et permettent de maîtriser température, irrigation, nutrition et cycles de récolte — pour des produits premium toute l'année.",
    cultures: ['Laitues & salades', 'Basilic · menthe', 'Tomates cerises', 'Concombres · poivrons', 'Fraises premium'],
    methodes: ['Hydroponie NFT', 'Hors-sol cocopeat', 'Fertigation pilotée'],
  },
  {
    num: '02',
    tag: 'PLEIN CHAMP',
    title: 'Cultures de plein champ',
    image: '/photos/vert2.png',
    imageAlt: 'Cultures de plein champ NigerVerdé avec irrigation goutte-à-goutte',
    badgeColor: 'bg-[#E78838]',
    tagColor: 'bg-[#EDDCCD]/60 text-[#5B6B61] border border-[#E78838]/20',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    desc: "Sur 1 à 2 hectares irrigués au goutte-à-goutte et alimentés au solaire, le plein champ augmente les volumes, diversifie les revenus et ouvre la voie à des produits transformés — moringa en tête.",
    cultures: ['Moringa', 'Piment', 'Gombo', 'Hibiscus / bissap', 'Pastèque', 'Maïs · niébé'],
    methodes: ['Goutte-à-goutte', 'Paillage', 'Énergie solaire'],
  },
]

function TagList({ label, tags, tagColor }: { label: string; tags: string[]; tagColor: string }) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#5B6B61]">{label}</span>
        <div className="flex-1 h-px bg-[#E3EBE2]" aria-hidden="true" />
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className={`text-xs font-medium px-3 py-1.5 rounded-full ${tagColor}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Modele() {
  return (
    <section id="modele" className="py-20 md:py-28 bg-[#FBFDF9]" aria-labelledby="modele-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#9C4B00]">
              Notre modèle agricole
            </p>
          </div>
          <h2
            id="modele-heading"
            className="font-display font-semibold text-[#134F47] text-balance leading-[1.2] mb-6"
            style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}
          >
            Deux pôles de production,{' '}
            <span className="relative inline-block">
              complémentaires
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#E78838]/20 -z-10 rounded" aria-hidden="true" />
            </span>
          </h2>
          <p className="text-[#5B6B61] text-lg leading-relaxed">
            NigerVerdé n&apos;est pas seulement une ferme hydroponique. C&apos;est une exploitation
            agricole mixte qui associe une production sous serre, contrôlée et régulière, à des
            cultures de plein champ qui apportent volume et diversification.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {poles.map((pole) => (
            <div
              key={pole.num}
              className="bg-white rounded-3xl overflow-hidden border border-[#E3EBE2] shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={pole.image}
                  alt={pole.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full shadow-md">
                  <span className={`${pole.badgeColor} w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0`}>
                    {pole.icon}
                  </span>
                  <span className="text-[#134F47] text-xs font-bold tracking-wide">
                    PÔLE {pole.num} · {pole.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display font-bold text-[#134F47] text-xl mb-3">{pole.title}</h3>
                <p className="text-[#5B6B61] text-sm leading-relaxed">{pole.desc}</p>
                <TagList label="Cultures" tags={pole.cultures} tagColor={pole.tagColor} />
                <TagList label="Méthodes" tags={pole.methodes} tagColor={pole.tagColor} />
              </div>
            </div>
          ))}
        </div>

        {/* Complementarity callout */}
        <div className="mt-8 bg-[#134F47] rounded-2xl px-6 py-5 flex items-start gap-5">
          <div className="shrink-0 w-11 h-11 bg-[#1B9548]/30 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C6 2 3 7 3 12c0 2.5 1 4.5 2.5 6" />
              <path d="M12 2c3 3 4 7 3 10s-4 6-7 6" />
              <path d="M12 22v-8" />
            </svg>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">
            <strong className="font-semibold text-white">Les deux pôles se complètent.</strong>{' '}
            Les serres assurent une production contrôlée et régulière ; le plein champ apporte les volumes,
            la diversification et les cultures de transformation. Si une activité rencontre un aléa,
            les autres maintiennent les revenus de l&apos;exploitation.
          </p>
        </div>
      </div>
    </section>
  )
}
