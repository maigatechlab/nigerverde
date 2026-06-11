import Image from 'next/image'
import { cultures } from '@/lib/content'

const groupIcons: Record<string, React.ReactNode> = {
  greenhouse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M3 9.5 12 3l9 6.5V21H3V9.5Z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  field: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
}

export default function Cultures() {
  return (
    <section
      id="cultures"
      className="py-20 md:py-28 bg-[#FBFDF9]"
      aria-labelledby="cultures-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned */}
        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#155C35]">
              {cultures.supertitle}
            </p>
          </div>
          <h2
            id="cultures-heading"
            className="font-display font-bold text-[#134F47] leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}
          >
            {cultures.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-[#5B6B61] text-sm leading-relaxed">{cultures.subtitle}</p>
        </div>

        {/* Groups */}
        <div className="space-y-12">
          {cultures.groups.map((group) => (
            <div key={group.id}>
              {/* Group header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-[#155C35]">
                  {groupIcons[group.icon]}
                  <span className="text-xs font-bold tracking-[0.15em] uppercase">{group.label}</span>
                </div>
                <span className="text-xs text-[#5B6B61]/70 hidden sm:block">{group.tech}</span>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="relative rounded-2xl overflow-hidden aspect-square group cursor-default"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="font-display font-bold text-white text-sm leading-tight">{item.name}</p>
                      <p className="text-[#FFB981] text-xs mt-0.5 font-medium">{item.sublabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
