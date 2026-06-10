import { marche } from '@/lib/content'

const icons: Record<string, React.ReactNode> = {
  hotel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <path d="M2 9h20M9 9v12M15 9v12" />
      <path d="M5 6h1M10 6h1M15 6h1" />
    </svg>
  ),
  restaurant: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  ),
  patisserie: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <path d="M8 2h8M12 2v4" />
      <rect x="3" y="10" width="18" height="10" rx="1" />
      <path d="M3 10c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4" />
      <path d="M8 15h8" />
    </svg>
  ),
  supermarche: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  epicerie: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <path d="M3 9.5 12 3l9 6.5V21H3V9.5Z" />
      <rect x="8" y="13" width="8" height="8" rx="0.5" />
      <path d="M10 13v8M14 13v8M8 17h8" />
    </svg>
  ),
  expat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" />
    </svg>
  ),
  menage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <path d="M3 9.5 12 3l9 6.5V21H3V9.5Z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  ferme: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B9548]" aria-hidden="true">
      <rect x="2" y="7" width="9" height="14" rx="1" />
      <rect x="13" y="7" width="9" height="14" rx="1" />
      <path d="M6 7V5a2 2 0 0 1 4 0v2M14 7V5a2 2 0 0 1 4 0v2" />
      <path d="M2 12h20" />
    </svg>
  ),
}

export default function Marche() {
  return (
    <section
      id="marche"
      className="py-20 md:py-28 bg-[#F6EFE6]"
      aria-labelledby="marche-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#1B9548]">
                {marche.supertitle}
              </p>
            </div>
            <h2
              id="marche-heading"
              className="font-display font-bold text-[#134F47] text-balance leading-[1.15] mb-5"
              style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}
            >
              {marche.title}
            </h2>
            <p className="text-[#5B6B61] leading-relaxed text-base mb-8">{marche.desc}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#134F47] hover:bg-[#0C322C] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#134F47]"
            >
              {marche.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — segment grid */}
          <div className="grid grid-cols-2 gap-3">
            {marche.segments.map((seg) => (
              <div
                key={seg.label}
                className="bg-white rounded-2xl px-4 py-4 border border-[#E3EBE2] shadow-sm flex items-center gap-3 hover:shadow-md hover:border-[#1B9548]/20 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#E8F5EE] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#d4edde] transition-colors">
                  {icons[seg.icon]}
                </div>
                <p className="font-semibold text-[#134F47] text-sm leading-tight">{seg.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
