import { intro } from '@/lib/content'

const icons: Record<string, React.ReactNode> = {
  greenhouse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#155C35]" aria-hidden="true">
      <path d="M3 9.5 12 3l9 6.5V21H3V9.5Z" />
      <path d="M9 21V12h6v9" />
      <path d="M3 9.5h18" />
    </svg>
  ),
  field: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#155C35]" aria-hidden="true">
      <rect x="2" y="7" width="9" height="14" rx="1" />
      <rect x="13" y="7" width="9" height="14" rx="1" />
      <path d="M6 7V5a2 2 0 0 1 4 0v2" />
      <path d="M14 7V5a2 2 0 0 1 4 0v2" />
      <path d="M2 12h20" />
    </svg>
  ),
  drone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#155C35]" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M5 5h2l1 3h8l1-3h2" />
      <path d="M5 19h2l1-3h8l1 3h2" />
      <path d="M5 5 3 3M19 5l2-2M5 19l-2 2M19 19l2 2" />
    </svg>
  ),
}

export default function Intro() {
  return (
    <section className="py-20 md:py-28 bg-[#FBFDF9]" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-14 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#155C35]">
                {intro.supertitle}
              </p>
            </div>
            <h2
              id="intro-heading"
              className="font-display font-bold text-[#134F47] leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}
            >
              {intro.title}
            </h2>
          </div>
          <p className="text-[#5B6B61] leading-relaxed text-base md:text-lg md:pt-14">
            {intro.text}
          </p>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {intro.tiles.map((tile) => (
            <div
              key={tile.title}
              className="relative bg-white rounded-2xl p-8 border border-[#E3EBE2] shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <span
                className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#1B9548] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                aria-hidden="true"
              />
              <div className="w-14 h-14 bg-[#E8F5EE] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4edde] transition-colors">
                {icons[tile.icon]}
              </div>
              <h3 className="font-display font-bold text-[#134F47] text-lg mb-3">{tile.title}</h3>
              <p className="text-[#5B6B61] leading-relaxed text-sm">{tile.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
