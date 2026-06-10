"use client"

import { useState } from 'react'
import { site } from '@/lib/content'
import { sendContactEmail } from '@/app/actions/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function FinalCta() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const result = await sendContactEmail(new FormData(e.currentTarget))
    if (result.success) {
      setStatus('success')
    } else {
      setErrorMsg(result.error ?? 'Erreur inconnue.')
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#134F47]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — primary WhatsApp path */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#FFB981]">Contact</p>
            </div>
            <h2
              id="cta-heading"
              className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}
            >
              Prêt à commander ?
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Hôtel, restaurant, distributeur ou particulier — envoyez-nous un message sur WhatsApp. Réponse rapide, sans formulaire.
            </p>

            {/* Primary WhatsApp CTA */}
            <a
              href={`https://${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-lg px-8 py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mb-4"
            >
              <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Demander un devis sur WhatsApp
            </a>

            <p className="text-white/40 text-xs text-center mb-8">{site.phone}</p>

            {/* Secondary contact details */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#FFB981]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href={`mailto:${site.email}`} className="text-white/70 text-sm hover:text-white transition-colors">
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#FFB981]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm">Diakindi, Niamey – Niger</p>
              </div>
            </div>
          </div>

          {/* Right — secondary form */}
          <div>
            <p className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-5">
              Ou laissez un message écrit
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#1B9548]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#1B9548]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-bold text-[#134F47] text-lg">Message envoyé !</p>
                  <p className="text-[#5B6B61] text-sm">Nous vous répondrons sous 24 h.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs text-[#1B9548] hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulaire de contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[#134F47] text-sm font-medium mb-1.5">
                        Nom complet <span className="text-[#E78838]">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Votre nom"
                        className="w-full border border-[#E3EBE2] rounded-xl px-4 py-3 text-sm text-[#16271F] placeholder-[#5B6B61]/50 focus:outline-none focus:border-[#1B9548] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="structure" className="block text-[#134F47] text-sm font-medium mb-1.5">
                        Structure
                      </label>
                      <input
                        id="structure" name="structure" type="text"
                        placeholder="Hôtel, restaurant..."
                        className="w-full border border-[#E3EBE2] rounded-xl px-4 py-3 text-sm text-[#16271F] placeholder-[#5B6B61]/50 focus:outline-none focus:border-[#1B9548] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#134F47] text-sm font-medium mb-1.5">
                      Téléphone / WhatsApp <span className="text-[#E78838]">*</span>
                    </label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="+227 ..."
                      className="w-full border border-[#E3EBE2] rounded-xl px-4 py-3 text-sm text-[#16271F] placeholder-[#5B6B61]/50 focus:outline-none focus:border-[#1B9548] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#134F47] text-sm font-medium mb-1.5">
                      Votre message <span className="text-[#E78838]">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={4} required
                      placeholder="Décrivez vos besoins en produits frais..."
                      className="w-full border border-[#E3EBE2] rounded-xl px-4 py-3 text-sm text-[#16271F] placeholder-[#5B6B61]/50 focus:outline-none focus:border-[#1B9548] transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-[#134F47] hover:bg-[#0C322C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-7 py-3.5 rounded-full transition-colors"
                  >
                    {status === 'submitting' ? 'Envoi…' : 'Envoyer le message'}
                    {status !== 'submitting' && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
