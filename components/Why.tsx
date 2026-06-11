import { why } from '@/lib/content'

const icons: Record<string, React.ReactNode> = {
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/70" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M12 12C12 8 8 5 4 6c0 4 3 7 8 6" />
      <path d="M12 12c0-4 4-7 8-6-1 4-4 7-8 6" />
    </svg>
  ),
  water: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/70" aria-hidden="true">
      <path d="M12 2C6 10 4 14 4 17a8 8 0 0 0 16 0c0-3-2-7-8-15Z" />
      <path d="M12 17a3 3 0 0 0 3-3" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/70" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/70" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

export default function Why() {
  return (
    <section className="py-20 md:py-28 bg-[#134F47]" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#FFB981]">
              {why.supertitle}
            </p>
          </div>
          <h2
            id="why-heading"
            className="font-display font-bold text-white text-balance leading-tight"
            style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}
          >
            {why.title}
          </h2>
        </div>

        {/* Cards — 4 columns with vertical dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
          {why.items.map((item) => (
            <div
              key={item.title}
              className="group px-0 py-10 lg:py-0 lg:px-10 lg:first:pl-0 lg:last:pr-0 first:pt-0 last:pb-0 sm:px-6 sm:py-0"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                {icons[item.icon]}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[#FFB981] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
