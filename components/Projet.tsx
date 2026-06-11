import Image from 'next/image'
import { projet } from '@/lib/content'

export default function Projet() {
  return (
    <section
      id="projet"
      className="py-20 md:py-28 bg-[#FBFDF9]"
      aria-labelledby="projet-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image — left */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
            <Image
              src="/photos/tomatoes.jpg"
              alt="Cultures NigerVerdé — tomates sous serre adaptée au Sahel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Stat badge — inside image, no z-index leak */}
            <div className="absolute bottom-5 right-5 bg-[#134F47]/90 backdrop-blur-sm rounded-2xl p-4 max-w-[160px]">
              <p className="font-display font-bold text-[#9C4B00] leading-none mb-2" style={{ fontSize: '2.2rem' }}>
                400 m²
              </p>
              <p className="text-white/80 text-xs leading-snug">
                de surface protégée sous serres adaptées au Sahel
              </p>
            </div>
          </div>

          {/* Text — right */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#155C35]">
                {projet.supertitle}
              </p>
            </div>

            <h2
              id="projet-heading"
              className="font-display font-bold text-[#134F47] text-balance leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}
            >
              {projet.titlePlain}{' '}
              <span className="relative inline-block">
                {projet.titleAccent}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-sm"
                  style={{ background: 'rgba(231,136,56,0.25)' }}
                  aria-hidden="true"
                />
              </span>
            </h2>

            <p className="text-[#5B6B61] leading-relaxed text-base mb-8">{projet.desc}</p>

            <ul className="space-y-4 mb-10">
              {projet.engagements.map((e) => (
                <li key={e.title} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#1B9548]/15 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-[#155C35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-[#5B6B61] text-sm leading-relaxed">
                    <strong className="font-semibold text-[#134F47]">{e.title}</strong>
                    {' '}—{' '}{e.desc}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#technologie"
              className="inline-flex items-center gap-2 bg-[#134F47] hover:bg-[#0C322C] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#134F47]"
            >
              {projet.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
