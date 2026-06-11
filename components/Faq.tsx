'use client'

import { useState } from 'react'
import { faq, site } from '@/lib/content'

export default function Faq() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="py-20 md:py-28 bg-[#FBFDF9]" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#155C35]">
                {faq.supertitle}
              </p>
            </div>
            <h2
              id="faq-heading"
              className="font-display font-bold text-[#134F47] leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem,3.2vw,2.6rem)' }}
            >
              {faq.title}
            </h2>
            <p className="text-[#5B6B61] text-sm leading-relaxed mb-8">{faq.desc}</p>

            {/* Contact card */}
            <div className="bg-[#F6EFE6] rounded-2xl p-5 border border-[#EDDCCD]">
              <p className="font-display font-bold text-[#134F47] text-sm mb-1">
                Vous ne trouvez pas votre réponse ?
              </p>
              <p className="text-[#5B6B61] text-xs leading-relaxed mb-4">
                Écrivez-nous sur WhatsApp, nous répondons rapidement.
              </p>
              <a
                href={`https://${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E78838] hover:bg-[#F68F31] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="space-y-2" role="list">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#1B9548]/25 bg-white shadow-sm'
                      : 'border-[#E3EBE2] bg-white'
                  }`}
                  role="listitem"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className={`font-display font-semibold text-sm ${isOpen ? 'text-[#155C35]' : 'text-[#134F47]'}`}>
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isOpen ? 'bg-[#1B9548] text-white' : 'bg-[#F6EFE6] text-[#5B6B61]'
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        {isOpen
                          ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          : <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        }
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}
                  >
                    <p className="px-5 pb-4 text-[#155C35]/80 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
