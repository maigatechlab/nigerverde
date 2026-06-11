import { technologie } from '@/lib/content'

const icons: Record<string, React.ReactNode> = {
  sawtooth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#155C35]" aria-hidden="true">
      <path d="M3 9.5 12 3l9 6.5V21H3V9.5Z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  nft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#155C35]" aria-hidden="true">
      <path d="M5 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2" />
      <path d="M19 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2" />
      <path d="M5 15h14" />
      <path d="M5 12c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="12" cy="9" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  cocopeat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#155C35]" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M12 12C12 8 8 5 4 6c0 4 3 7 8 6" />
      <path d="M12 12c0-4 4-7 8-6-1 4-4 7-8 6" />
    </svg>
  ),
  solar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#155C35]" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="1" />
      <path d="M12 6v12M2 12h20M7 6v12M17 6v12" />
    </svg>
  ),
  water: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#155C35]" aria-hidden="true">
      <path d="M12 2C6 10 4 14 4 17a8 8 0 0 0 16 0c0-3-2-7-8-15Z" />
      <path d="M12 17a3 3 0 0 0 3-3" />
    </svg>
  ),
  drone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#155C35]" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10V7M12 17v-3M10 12H7M17 12h-3" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  ),
}

const numColors = ['text-[#5B6B61]', 'text-[#5B6B61]', 'text-[#5B6B61]', 'text-[#9C4B00]', 'text-[#5B6B61]', 'text-[#9C4B00]']

export default function Technologie() {
  return (
    <section
      id="technologie"
      className="py-20 md:py-28 bg-[#F6EFE6]"
      aria-labelledby="techno-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#9C4B00]">
              {technologie.supertitle}
            </p>
          </div>
          <h2
            id="techno-heading"
            className="font-display font-semibold text-[#134F47] text-balance leading-[1.2]"
            style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}
          >
            {technologie.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologie.cards.map((card, i) => (
            <div
              key={card.title}
              className="relative bg-white rounded-2xl p-7 border border-[#E3EBE2] shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
            >
              <span
                className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#1B9548] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-[#E8F5EE] rounded-xl flex items-center justify-center">
                  {icons[card.icon]}
                </div>
                <span className={`font-bold text-lg tabular-nums ${numColors[i]}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display font-bold text-[#134F47] text-lg mb-3">{card.title}</h3>
              <p className="text-[#5B6B61] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#cultures"
            className="inline-flex items-center gap-2 border-2 border-[#1B9548] text-[#155C35] hover:bg-[#1B9548] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-[#1B9548]"
          >
            {technologie.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
