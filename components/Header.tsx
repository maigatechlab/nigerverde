'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { nav } from '@/lib/content'

const sectionIds = ['projet', 'modele', 'technologie', 'drone', 'cultures', 'marche', 'contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHref(`#${id}`) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    const onScroll = () => {
      if (window.scrollY < 200) setActiveHref('#')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E3EBE2]'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — emblem only */}
          <a href="#" className="shrink-0" aria-label="NigerVerdé — Accueil">
            <Image
              src={scrolled ? '/logo.svg' : '/logo-white.svg'}
              alt="NigerVerdé"
              width={44}
              height={44}
              className="w-10 h-10 lg:w-11 lg:h-11"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navigation principale">
            {nav.links.map((link) => {
              const isActive = activeHref === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? scrolled ? 'text-[#1B9548]' : 'text-[#E78838]'
                      : scrolled ? 'text-[#16271F] hover:text-[#1B9548]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#E78838] hover:bg-[#F68F31] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              {nav.cta}
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-[#16271F] hover:bg-[#F6EFE6]' : 'text-white hover:bg-white/10'
              }`}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E3EBE2] shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Navigation mobile">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#16271F] font-semibold py-2.5 px-3 rounded-lg hover:bg-[#F6EFE6] hover:text-[#1B9548] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#E78838] hover:bg-[#F68F31] text-white font-bold py-3 px-4 rounded-full text-center transition-colors"
            >
              {nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
